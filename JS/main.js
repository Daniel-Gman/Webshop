let handleClick = true;
let myDiv = document.getElementById("switch");
let animationDiv = document.getElementsByClassName("animation-saber")
console.log(animationDiv)

/*
* Credits: Luc Zuidema, Oscar Slot, Daniel Vermeulen
*/

myDiv.addEventListener("click", function () {
    if (handleClick === true) {
        for (let i = 0; i < animationDiv.length; i++) {
            animationDiv[i].style.animationName = "saber-slider"

            var audio = new Audio('JS/sounds/Star-wars-lightsaber-sound-effects.wav');
            audio.loop = false;
            audio.play();
        }
        handleClick = false
    } else if (handleClick === false) {
        for (let i = 0; i < animationDiv.length; i++) {
            animationDiv[i].style.animationName = "saber-slider-rev"

            var audio = new Audio('JS/sounds/lightsaber2-105441.mp3');
            audio.loop = false;
            audio.play();
        }
        handleClick = true
    }
});