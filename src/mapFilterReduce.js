  let cart =[
      {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
      {id:2,productName:"Kalem",quantity:7,unitPrice:2000},
      {id:3,productName:"Klavye",quantity:3,unitPrice:1000},
      {id:4,productName:"Bardak",quantity:6,unitPrice:4000},
      {id:5,productName:"Kitap",quantity:2,unitPrice:1200},
      {id:6,productName:"Şarj Cihazı",quantity:2,unitPrice:4200},
  ]

// map fonksiyonu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. O dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi meydana getirir.

  // Nesnemiz ile ilgili tek bir islem adımı uygularsak bu sekilde yazabiliriz.
cart.map(product=>console.log(product.productName));

// Nesnemiz ile ilgili birden fazla islem adimi uygulayacak oldugumuz durumlarda ise bu sekilde bir sytanx yapısı uygulariz.
cart.map(product=>{
    console.log('Urun ismi :'+product.productName+ 'Ürün Adeti:'+product.quantity+" Urun Fiyati :"+product.unitPrice);
})

// Bu sekilde nesnemizin özellikleri ile ilgili çoklu islemler yapmak  istedigimizde bu sekilde bir yapı kullanabiliriz.
cart.map(product=>{
    console.log(product.productName +" : "+ product.unitPrice*product.quantity);

})



// Filter metodu ile nesnelerimiz icerisinde istedigimiz özelliklere gore filtreleyip yeni bir array olarak dondurme islemi yapabiliriz.
cart.filter(product =>console.log(product.unitPrice == 4000))

let quantityOver2 = cart.filter(product =>product.quantity>2);
console.log(quantityOver2); 



// reduce fonksiyonu Dizinin her bir elemanı için; parametre olarak verilen (callback) reducer fonksiyonu çağırır ve dizinin tüm elamanlarına
// bu fonksiyonu uygulayarak fonksiyonda belirtilen işlemi yapar ve tek çıktılı bir sonuç oluşturur.
// Asagidaki yapıda acc baslangic degerimiz. product da nesnelerimizi üzerindeki ozelliklere ulasacagimiz keywordumuz. acc+product.unitPrice ile fonksiyonun ne işlemi yapacaginiz 
// tanimliyoruz. Su an toplama islemini tanımladik. 0 degeri ise acc nin baslangic degeridir.
let total = cart.reduce((acc,product)=>acc+product.unitPrice,0);
console.log(total);








/*



// Referans ve deger tiplerin farkliligini anlattigimiz fonksiyonlar üzerindeki islemlerimiz.
   

function addToCart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:5,unitPrice:20})
    
}

//addToCart metoduna parametre olarak gonderdigimiz cart array nesnesinde icerigindeki bilgileri gondermiyoruz.
// cart nesnesinin referans adresini gonderme islemi yapiyoruz. Yapılan islemler direkt adres üzerinden gerçekleşmektedir.
addToCart(cart)

// addToCart metoduna göndermis oldugumuz referans adresi sepet degiskenine aktarildigi icin sepet üzerinden ekledigimiz yeni nesneler cart nesnesine aktarilir.
console.log(cart);


//Değer tiplerde ise adres gonderme islemi olmadıgı icin asagidaki fonskiyonda sayi degeri ekrana yine 10 yazdırır.
let sayi = 10
function sayiTopla(number) {
    number +=1
}

sayiTopla(sayi);
console.log(sayi);
  */