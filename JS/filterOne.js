const card1 = document.getElementById("card--name1");
const card2 = document.getElementById("card--name2");
const card3 = document.getElementById("card--name3");
const card4 = document.getElementById("card--name4");
const card5 = document.getElementById("card--name5");
const card6 = document.getElementById("card--name6");
const card7 = document.getElementById("card--name7");
const card8 = document.getElementById("card--name8");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");

const li1 = document.getElementById("list1");
const li2 = document.getElementById("list2");
const li3 = document.getElementById("list3");
const li4 = document.getElementById("list4");
const li5 = document.getElementById("list5");
const li6 = document.getElementById("list6");
const li7 = document.getElementById("list7");
const li8 = document.getElementById("list8");

const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
const star6 = document.getElementById("star6");
const star7 = document.getElementById("star7");
const star8 = document.getElementById("star8");

const checkbox_verhicles = document.getElementById("vehicle1");
const checkbox_verhicles2 = document.getElementById("vehicle2");
const checkbox_verhicles3 = document.getElementById("vehicle3");

function OriginalCode() {

    card1.innerHTML = 'Blauwe Lightsaber';
    card2.innerHTML = 'Millennium Falcon';
    card3.innerHTML = 'Clone Gunship';
    card4.innerHTML = 'Red Lightsaber';
    card5.innerHTML = 'X-Wing';
    card6.innerHTML = 'Paarse Lightsaber';
    card7.innerHTML = 'Padawan Lightsaber';
    card8.innerHTML = 'Clone TurboTank';

    img1.src = '../SRC/blueLightsaber.webp';
    img2.src = '../SRC/falcon.webp';
    img3.src = '../SRC/gunship.webp';
    img4.src = '../SRC/redLightsaberjpg.webp';
    img5.src = '../SRC/xwing.webp'
    img6.src = '../SRC/purpleLightsaber.webp';
    img7.src = '../SRC/blueLightsaber.webp';
    img8.src = '../SRC/cloneTurboTank.webp';

    star1.innerHTML = '&#9733;'; star1.style.color = 'purple'
    star2.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star2.style.color = 'purple'
    star3.innerHTML = '&#9733;'; star3.style.color = 'purple'
    star4.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star4.style.color = 'purple'
    star5.innerHTML = '&#9733;' + '&#9733;'; star5.style.color = 'purple'
    star6.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star6.style.color = 'purple'
    star7.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;' + '&#9733'; star7.style.color = 'purple'
    star8.innerHTML = '&#9733;'; star8.style.color = 'purple'
};

OriginalCode();

let display_verhicles = false;
let display_verhicles2 = false;
let display_verhicles3 = false;

function display_shit() {
    if (display_verhicles) {
        ///Code down here:
        li5.style.display = 'none';
        li6.style.display = 'none';
        li7.style.display = 'none';
        li8.style.display = 'none';
        card2.innerHTML = 'Padawan Lightsaber'
        card3.innerHTML = 'Paarse Lightsaber'
        img2.src = '../SRC/blueLightsaber.webp'
        img3.src = '../SRC/purpleLightsaber.webp'
        star3.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'
        star3.style.color = 'purple'
    } else {
        li5.style.display = '';
        li6.style.display = '';
        li7.style.display = '';
        li8.style.display = '';
        OriginalCode();
    }
}

function display_shit2() {
    if (display_verhicles2) {
        ///Code down here:
        li5.style.display = 'none';
        li6.style.display = 'none';
        li7.style.display = 'none';
        li8.style.display = 'none';
        card1.innerHTML = 'X-Wing'
        card4.innerHTML = 'Clone TurboTank'
        img1.src = '../SRC/xwing.webp'
        img4.src = '../SRC/cloneTurboTank.webp'
        star1.innerHTML = '&#9733;' + '&#9733;'
        star4.innerHTML = '&#9733;'
        star3.style.color = 'purple'
    } else {
        li5.style.display = '';
        li6.style.display = '';
        li7.style.display = '';
        li8.style.display = '';
        OriginalCode();
    }
}

function display_shit3() {
    if (display_verhicles3) {
        ///Code down here:
        card1.innerHTML = 'Padawan Lightsaber';
        card2.innerHTML = 'Rode Lightsaber';
        card3.innerHTML = 'Paarse Lightsaber';
        card4.innerHTML = 'Millennium Falcon';
        card5.innerHTML = 'X-Wing';
        card6.innerHTML = 'Blauwe Lightsaber';
        card7.innerHTML = 'Clone Gunship';
        card8.innerHTML = 'Clone TurboTank';

        img1.src = '../SRC/blueLightsaber.webp';
        img2.src = '../SRC/redLightsaberjpg.webp';
        img3.src = '../SRC/purpleLightsaber.webp';
        img4.src = '../SRC/falcon.webp';
        img5.src = '../SRC/xwing.webp'
        img6.src = '../SRC/blueLightsaber.webp';
        img7.src = '../SRC/gunship.webp';
        img8.src = '../SRC/cloneTurboTank.webp';

        star1.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;' + '&#9733'; star1.style.color = 'purple'
        star2.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star2.style.color = 'purple'
        star3.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star2.style.color = 'purple'
        star4.innerHTML = '&#9733;' + '&#9733;' + '&#9733;' + '&#9733;'; star4.style.color = 'purple'
        star5.innerHTML = '&#9733;' + '&#9733;'; star5.style.color = 'purple'
        star6.innerHTML = '&#9733;'; star8.style.color = 'purple'
        star7.innerHTML = '&#9733;'; star8.style.color = 'purple'
        star8.innerHTML = '&#9733;'; star8.style.color = 'purple'
    } else {
        OriginalCode();
    }
}










checkbox_verhicles.onclick = function () {
    display_verhicles = checkbox_verhicles.checked;
    display_shit();
}

checkbox_verhicles2.onclick = function () {
    display_verhicles2 = checkbox_verhicles2.checked;
    display_shit2();
}

checkbox_verhicles3.onclick = function () {
    display_verhicles3 = checkbox_verhicles3.checked;
    display_shit3();
}


///Credits: Oscar Slot help with checkbox///