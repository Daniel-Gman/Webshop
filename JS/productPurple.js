const productTitle = document.getElementById('title');
const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const price = document.getElementById('price');
const button = document.getElementById('button')
const menu = document.getElementById('menu');
const letter = document.getElementById('letter');
const img = document.getElementById('img')
let counter = 1;
let buttoncount = true;

circle2.style.background = 'white';
circle3.style.background = 'white';

circle1.addEventListener('click', function () {
    circle1.style.background = '#ddc4f0b6';
    productTitle.textContent = '(M)';
    letter.textContent = 'M'
    img.style.width = '36rem'
    price.textContent = '€19,99';

    circle2.style.background = 'white';
    circle3.style.background = 'white';
});

circle2.addEventListener('click', function () {
    circle2.style.background = '#ddc4f0b6';
    productTitle.textContent = '(L)';
    letter.textContent = 'L'
    price.textContent = '€22,50';
    img.style.width = '50rem'
    circle1.style.background = 'white';
    circle3.style.background = 'white';
});

circle3.addEventListener('click', function () {
    circle3.style.background = '#ddc4f0b6';
    productTitle.textContent = '(XL)';
    letter.textContent = 'XL'
    price.textContent = '€24,99';
    img.style.width = '60rem'
    circle2.style.background = 'white';
    circle1.style.background = 'white';
});

button.addEventListener('click', function () {
    var popup = document.getElementById("popup");
    popup.classList.toggle("fadeIn");
    setTimeout(function () {
        popup.classList.toggle("fadeOut")
    }, 2000);
}
);

function changeProduct(counter) {
    if (counter === 1) {
        circle1.style.background = '#ddc4f0b6';
        circle2.style.background = 'white';
        circle3.style.background = 'white';
        letter.textContent = 'M';
        productTitle.textContent = '(M)';
        price.textContent = '€19,99';
        img.style.width = '36rem'
    } else if (counter === 2) {
        circle2.style.background = '#ddc4f0b6';
        circle1.style.background = 'white';
        circle3.style.background = 'white';
        letter.textContent = 'L';
        productTitle.textContent = '(L)';
        price.textContent = '€22,50';
        img.style.width = '50rem'
    } else if (counter === 3) {
        circle3.style.background = '#ddc4f0b6';
        circle1.style.background = 'white';
        circle2.style.background = 'white';
        letter.textContent = 'XL';
        productTitle.textContent = '(XL)';
        price.textContent = '€24,99';
        img.style.width = '60rem'
    }

    menu.addEventListener('click', function () {
        counter = (counter % 3) + 1;
        changeProduct(counter);
    });
}

changeProduct(counter);
