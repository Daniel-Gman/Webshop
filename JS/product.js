const productTitle = document.getElementById('title');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const price = document.getElementById('price');
const button = document.getElementById('button')
const menu = document.getElementById('menu');
const letter = document.getElementById('letter');
let counter = 1;

circle2.style.background = 'white';
circle3.style.background = 'white';

circle1.addEventListener('click', function () {
    circle1.style.background = '#ddc4f0b6';
    productTitle.textContent = 'Lightsaber Blauw (M)';
    letter.textContent = 'M'

    price.textContent = '€14,99';

    circle2.style.background = 'white';
    circle3.style.background = 'white';
});

circle2.addEventListener('click', function () {
    circle2.style.background = '#ddc4f0b6';
    productTitle.textContent = 'Lightsaber Blauw (L)';
    letter.textContent = 'L'
    price.textContent = '€17,50';

    circle1.style.background = 'white';
    circle3.style.background = 'white';
});

circle3.addEventListener('click', function () {
    circle3.style.background = '#ddc4f0b6';
    productTitle.textContent = 'Lightsaber Blauw (XL)';
    letter.textContent = 'XL'
    price.textContent = '€19,99';

    circle2.style.background = 'white';
    circle1.style.background = 'white';
});

button.addEventListener('click', function () {
    alert("Item toegevoegd aan winkelwagen")
});

function changeProduct(counter) {
    if (counter === 1) {
        circle1.style.background = '#ddc4f0b6';
        circle2.style.background = 'white';
        circle3.style.background = 'white';
        letter.textContent = 'M';
        productTitle.textContent = 'Lightsaber Blauw (M)';
        price.textContent = '€14,99';
    } else if (counter === 2) {
        circle2.style.background = '#ddc4f0b6';
        circle1.style.background = 'white';
        circle3.style.background = 'white';
        letter.textContent = 'L';
        productTitle.textContent = 'Lightsaber Blauw (L)';
        price.textContent = '€17,50';
    } else if (counter === 3) {
        circle3.style.background = '#ddc4f0b6';
        circle1.style.background = 'white';
        circle2.style.background = 'white';
        letter.textContent = 'XL';
        productTitle.textContent = 'Lightsaber Blauw (XL)';
        price.textContent = '€19,99';
    }

    menu.addEventListener('click', function () {
        counter = (counter % 3) + 1;
        changeProduct(counter);
    });
}

changeProduct(counter);
