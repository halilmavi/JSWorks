function addToCart(productName) {

    console.log(productName + " Sepete Eklendi");
}
addToCart("Kitap");


// Java scriptte fonksiyonlarda bu şekilde default(varsayılan) deger tanimlamasi yapabiliriz.
// Fonksiyona parametre olarak gönderilmese bile varsayılan deger ekrana bastırılır.
function addToCart1(productName = "Elma") {

    console.log("Sepete Eklendi  " + "Ürün ismi:" + productName);
}
addToCart1();


//Fonskiyonda parametre olarak tanımlanan varsayılan degerleri basa yazarsak fonksiyona gonderilen parametre sırası ile atayacagi icin 
// yanlis degeri yanlis degiskene atama islemi yapariz. Bunun önüne gecmek icin varsayılan degerleri parametre olarak en sona atama islemi yapariz. 
function addToCart2(productName = "Elma", quantity) {

    console.log("Sepete Eklendi  " + "Ürün ismi:" + productName + "  Adet:" + quantity);
}
addToCart2(10);



function addToCart3(quantity, productName = "Elma") {

    console.log("Sepete Eklendi  " + "Ürün ismi:" + productName + "  Adet:" + quantity);
}
addToCart3(10);


//************************************************************************


//Bir degiskene bu sekilde arrow function tanımlayabiliriz.
let sayHello = () => {
    console.log("Hello World");
}

// Veya normal bir fonksiyonu da bu sekilde atama işlemi yapabiliriz.
let sayHello2 = function () {
    console.log("Hello World 2");
}


//************************************************************************

function sepeteEkle(productName, quantity, unitPrice) {

}
sepeteEkle("Elma", 5, 10);
sepeteEkle("Armut", 3, 15);
sepeteEkle("Karpuz", 6, 25);


//*************************************************************************
// Yukardaki gibi tek tek parametre tanımlamak yerine bu sekilde bir nesne tanimlayarak onun icerisinde bu ozellikleri tanimlayabiliriz. 
let product1 = { productName: "Elma", unitPrice: 10, quantity: 2 }
function sepeteEkle2(product) {
    console.log("Ürün :" + product.productName + " Adet :" + product.quantity + " Fiyatı :" + product.unitPrice);
}

sepeteEkle2(product1);


//*************************************************************************


function sepeteEkle3(product) {
    console.log(product)
}
// products adında bir tane nesne arrayi tanimladik ve ayri ayri ürünlerimizin özelliklerini tek bir nesne(products) icerisinde paketleme işlemi yaptık. 
let products = [
    { productName: "Kivi", unitPrice: 12, quantity: 4 },
    { productName: "Muz", unitPrice: 15, quantity: 5 },
    { productName: "Portakal", unitPrice: 17, quantity: 8 }
]
sepeteEkle3(products);



// Belirli sayidaki toplama islemini yaparken bu sekilde fonksiyon tanımlayabiliriz. Fakat kullanıcı tarafindan kac tane sayinin toplanacağını bilmediğimiz durumlarda asagıdaki yapıyı kullanırız.
function add(number1, number2) {
    console.log(number1 + number2);
}

//Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar. " ... " Rest Parametresi olarak kullanıyoruz.
//Rest parametresini kullanırken her zaman en sona koymamız gerekir. Eger ilk basta tanımlarsak diger parametrelere gidecek degerleri de rest kendi icersine atar.
function add2(...numbers) {
    let toplam = 0;
    for (let i = 0; i < numbers.length; i++) {
        toplam += numbers[i];
    }
    console.log(toplam);
}

add2(12, 34, 22, 14, 20);


// Spread Operatörü (...); String, Array veya Object değişmezlerini genişletmemize yardımcı olur.
let numbers = [13, 75, 32, 18, 84, 834];
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));
//834


// String ifadeleri ayırmamızı saglar.
let name = "JavaScript";
let arrayOfStrings = [...name];
console.log(arrayOfStrings);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


//Dizileri birleştirmemizi saglar.
const group1 = [1, 2, 3];
const group2 = [4, 5, 6];
const allGroups = [...group1, ...group2];
console.log(allGroups)
//[1, 2, 3, 4, 5, 6]






//DESTRUCTURING
// Destructuring elimizdeki nesneleri yahut dizileri var olan mevcut yapılarından daha küçük parçalara ayırmak isteyebiliriz. ECMAScript 6 ile gelen Destructuring özelliği bu isteğimize
// karşılık olarak nesneleri ya da dizileri parçalayabilmekte ve bu işlem neticesinde işimize yarayan parçalardan istediğimizi çekip kullanma özgürlüğünü bizlere tanımaktadır.
let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    { name: "İc Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Trabzon","Zonguldak"]
    ]
]

console.log(icAnadolu);
console.log(marmara);
console.log(karadeniz);

console.log(karadeniz.population);
console.log(icAnadolu.name);


// Yukarda iç içe gecmis bir array yapısı tanımlamamıza izin veriyor.
// Bu sekilde gelen verimizi gruplandırma islemlerini daha kolay yapmamızı saglar.
console.log(icAnadoluSehirleri);
console.log(marmaraSehirleri);
console.log(karadenizSehirleri);




// Nesnemiz
let newProductName,newUnitPrice,newQuantity
({
    productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity
    ={productName:"Elma",unitPrice:10,quantity:5}
})

console.log(newProductName)
console.log(newQuantity)
console.log(newQuantity)