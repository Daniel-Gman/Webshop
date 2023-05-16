var handleClick = false;
var myDiv = document.getElementById("switch");

myDiv.addEventListener("click", function () {
    if (handleClick == false) {
        console.log("uit");
        handleClick = true;
    } else if (handleClick == true) {
        console.log("aan");
        handleClick = false;
    }
});
