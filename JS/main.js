let handleClick = false;
let myDiv = document.getElementById("switch");
let animationDiv = document.getElementsByClassName("animation-saber")
console.log(animationDiv)



myDiv.addEventListener("click", function () {
    if (handleClick == false) {
        animationDiv.style.animationName = ""
        handleClick = true;

    } else if (handleClick == true) {
        console.log("aan");
        animationDiv.style.animationName = "saber-slider"
    }
});


