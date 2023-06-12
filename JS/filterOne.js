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
img5.src = '../SRC/cloneTurboTank.webp'
img6.src = '../SRC/purpleLightsaber.webp';
img7.src = '../SRC/blueLightsaber.webp';
img8.src = '../SRC/xwing.webp'
const checkbox_verhicles = document.getElementById("vehicle1");

let display_verhicles = false;

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
    } else {

    }
}


checkbox_verhicles.onclick = function () {
    display_verhicles = checkbox_verhicles.checked;
    display_shit();
}


///Credits: Oscar Slot help with checkbox///