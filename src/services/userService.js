// JS de classlarımızı bu sekilde tanımlama islemi yaparız.
// export default bir componentin içinde olan bir çok fonksiyondan hangisinin varsayılan olarak çalıştırılıcağını belirtir.
// export ise fonksiyonlarımızı App.js’de kullanabilmemize yarar. App.js de import ederek kullanabiliriz.

export default class UserService {

    constructor(loggerService){
        this.users=[]
        this.loggerService = loggerService
    }

    add(user) {
        this.users.push(user)
        this.loggerService.log(user);
        
    }

    list() {
        return this.users
    }

    // find metodu da vermis oldugumuz sarta gore data dondururç
    getById(id) {
        return this.users.find(user=>user.id===id)
    }
}  