const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

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
const PriceFilter = document.getElementById("price-filter")

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

PriceFilter.addEventListener('change', function () {
    const selectOption = PriceFilter.options[PriceFilter.selectedIndex];
    if (selectOption.id === 'prijs--laag') {
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
                card1.style.display = ''
                card2.style.display = ''
                card3.style.display = ''
                card4.style.display = ''
                card5.style.display = ''
                card6.style.display = ''
                card7.style.display = ''
                card8.style.display = ''
                card9.style.display = ''
                card10.style.display = ''
                card11.style.display = ''
                card12.style.display = ''
            });
    } else if (selectOption.id === 'prijs--mid') {
        fetch("/Json/producten.json")
            .then(function (response) { return response.json(); })
            .then(function (json) {
                price9.innerHTML = `${json[11].price}`;
                img9.src = json[11].img
            });
        card10.style.display = 'none'
        card11.style.display = 'none'
        card12.style.display = 'none'
    } else if (selectOption.id === 'prijs--hoog') {
        fetch("/Json/producten.json")
            .then(function (response) { return response.json(); })
            .then(function (json) {
                price1.innerHTML = `${json[10].price}`;
                img1.src = json[10].img
                price2.innerHTML = `${json[9].price}`;
                img2.src = json[9].img
                price3.innerHTML = `${json[8].price}`;
                img3.src = json[8].img
            });
        card4.style.display = 'none'
        card5.style.display = 'none'
        card6.style.display = 'none'
        card7.style.display = 'none'
        card8.style.display = 'none'
        card9.style.display = 'none'
        card10.style.display = 'none'
        card11.style.display = 'none'
        card12.style.display = 'none'
    }
})