// JS de classlarımızı bu sekilde tanımlama islemi yaparız.
// export default bir componentin içinde olan bir çok fonksiyondan hangisinin varsayılan olarak çalıştırılıcağını belirtir.
// export ise fonksiyonlarımızı App.js’de kullanabilmemize yarar. App.js de import ederek kullanabiliriz.

import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {

    constructor(loggerService) {
        //datamızdan gelen farklı özellik barındıran özellikleri ayrı ayrı dizilerine içerisine atayacagiz.

        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }

                    break;

                case "employee":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;

                default:
                    this.errors.push(new DataError("Wrong user type", user));
                    break;
            }
        }
    }



    // Eklenecek müsterilerin eksik bilgiye sahip olup olmamasını kontrol ettigimiz metodumuz.
    // Bu tarz dogrulama islemlerini React'da formik ve yup yapısı ile çok sık kullanılmaktadır.
    checkCustomerValidityForErrors(user) {
        // requiredFields ile doldurulması gereken alanların adını tanımladık. Bu özelliklere sahip olması gerekiyor.
        let requiredFields = "id firstName lastName age city".split(" ");
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user));
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user));
        }

        return hasErrors;
    }

    checkEmployeeValidityForErrors(user) {
        // requiredFields ile doldurulması gereken alanları  n adını tanımladık. Bu özelliklere sahip olması gerekiyor.
        let requiredFields = "id firstName lastName age city salary".split(" ");
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem. ${field} is required`, user));
            }
        }
        return hasErrors;
    }



    add(user) {


        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }

                break;

            case "employee":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;

            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user));
                break;
        }


    }

    listCustomers() {
        return this.customers
    }

    // find metodu da vermis oldugumuz sarta gore data doldurur.
    getCustomerById(id) {
        return this.customers.find(user => user.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }
            else{
                return 1;
            }    

        })
    }

    



}  