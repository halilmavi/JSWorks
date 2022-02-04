function addToCart(productName) {    

    console.log(productName+" Sepete Eklendi");    
}
addToCart("Kitap");


// Java scriptte fonksiyonlarda bu şekilde default(varsayılan) deger tanimlamasi yapabiliriz.
// Fonksiyona parametre olarak gönderilmese bile varsayılan deger ekrana bastırılır.
function addToCart1(productName="Elma") {    

    console.log("Sepete Eklendi  " + "Ürün ismi:"+ productName);    
}
addToCart1();


//Fonskiyonda parametre olarak tanımlanan varsayılan degerleri basa yazarsak fonksiyona gonderilen parametre sırası ile atayacagi icin 
// yanlis degeri yanlis degiskene atama islemi yapariz. Bunun önüne gecmek icin varsayılan degerleri parametre olarak en sona atama islemi yapariz. 
function addToCart2(productName="Elma",quantity) {    

    console.log("Sepete Eklendi  " + "Ürün ismi:"+ productName +"  Adet:"+quantity);    
}
addToCart2(10);



function addToCart3(quantity,productName="Elma") {    

    console.log("Sepete Eklendi  " + "Ürün ismi:"+ productName +"  Adet:"+quantity);    
}
addToCart3(10);


