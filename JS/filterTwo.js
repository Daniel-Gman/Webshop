const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const price4 = document.getElementById("price4");
const price5 = document.getElementById("price5");
const price6 = document.getElementById("price6");
const price7 = document.getElementById("price7");
const price8 = document.getElementById("price8");
const price9 = document.getElementById("price9");
const price10 = document.getElementById("price10");
const price11 = document.getElementById("price11");
const price12 = document.getElementById("price12");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");

const laag = document.getElementById("prijs--laag")
const mid = document.getElementById("prijs--mid");
const high = document.getElementById("prijs--hoog");

fetch("/Json/producten.json")
    .then(function (response) { return response.json(); })
    .then(function (json) {
        price1.innerHTML = `${json[0].price}`;
        img1.src = json[0].img
        price2.innerHTML = `${json[1].price}`;
        img2.src = json[1].img
        price3.innerHTML = `${json[2].price}`;
        img3.src = json[2].img
        price4.innerHTML = `${json[3].price}`;
        img4.src = json[3].img
        price5.innerHTML = `${json[4].price}`;
        img5.src = json[4].img
        price6.innerHTML = `${json[5].price}`;
        img6.src = json[5].img
        price7.innerHTML = `${json[6].price}`;
        img7.src = json[6].img
        price8.innerHTML = `${json[7].price}`;
        img8.src = json[7].img
        price9.innerHTML = `${json[8].price}`;
        img9.src = json[8].img
        price10.innerHTML = `${json[9].price}`;
        img10.src = json[9].img
        price11.innerHTML = `${json[10].price}`;
        img11.src = json[10].img
        price12.innerHTML = `${json[11].price}`;
        img12.src = json[11].img
    });



