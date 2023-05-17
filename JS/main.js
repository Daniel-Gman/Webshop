let handleClick = true;
let myDiv = document.getElementById("switch");
let animationDiv = document.getElementsByClassName("animation-saber")
console.log(animationDiv)


myDiv.addEventListener("click", function () {
    if (handleClick === true) {
        for (let i = 0; i < animationDiv.length; i++) {
            animationDiv[i].style.animationName = "saber-slider"
        }
        handleClick = false
    } else if (handleClick === false) {
        for (let i = 0; i < animationDiv.length; i++) {
            animationDiv[i].style.animationName = "saber-slider-rev"
        }
        handleClick = true
    }
});


