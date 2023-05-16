var handleClick = true;
var myDiv = document.getElementById("switch");

myDiv.addEventListener("click", function () {
    if (handleClick == true) {
        console.log("aan");
        handleClick = false;
    } else if (handleClick == false) {
        console.log("uit");
        handleClick = true;
    }
});
