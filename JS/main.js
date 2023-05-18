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

            var audio = new Audio('sounds/ignite.wav');
            audio.loop = false;
            audio.play();
        }
        handleClick = false
    } else if (handleClick === false) {
        for (let i = 0; i < animationDiv.length; i++) {
            animationDiv[i].style.animationName = "saber-slider-rev"

            var audio = new Audio('sounds/retreave.wav');
            audio.loop = false;
            audio.play();
        }
        handleClick = true
    }
});