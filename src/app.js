console.log("Hello world");

let dolarBugun = 9.20;
dolarBugun = "Tip guvenliği yoktur.";

console.log(dolarBugun);


const euroDun = 9.2;    
//euroDun = 4.3;      // const tipindeki degiskenlere atanan ilk degerlerden baska deger atayamayız. Hata alırız.
console.log(euroDun);

let konutKredileri = ["Konut Kredisi","Emlak konuk kredisi",6,["deneme Dizi İcınde Dizi",12]]

console.log("<ul>");
for(let i=0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>");
console.log();


