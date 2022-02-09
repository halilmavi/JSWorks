//Java scriptte sınıf kavramı yoktur. Fonksiyon kavramı vardır.(Type scriptte var) Java scriptte nesne yönelimli programlamayı uygulamamızı sağlayan yapı prototype'tir.
// C# daki gibi sınıf içerisinde property tanımlama işlemi yapamıyoruz. Java scriptte prototype şeklinde bir formatı olduğu için
//uygulamada kullanacak olduğumuz verileri bu şekilde constructor içerisinde prototype işlemine uygun şekilde atama yaparız.
// constructor'a gelen parametre degerlerini User sınıfına atadigimiz icin this 'i kullanarak bu sinifa atadigmiza tanımlıyoruz.

export default class User {
    constructor(id, firstName, lastName, city,age) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age=age
    }
}