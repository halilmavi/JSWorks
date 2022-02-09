//Uygulamamızda ortak kullanacak olduğumuz özellikleri extends işlemi ile genişletebiliriz. Yani User adindaki sinifimizi Customer sinifina extends edip 
// User daki özellikleri customer'inda kullanmasını sağlama işlemi yapabiliriz. 

import User from "./user.js"

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age)
        this.creditCardNumber = creditCardNumber
    }
}