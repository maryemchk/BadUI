"use strict";

var rotate = 0;

function like() {
    let ratio = document.querySelector(".ratio");
    ratio.style.display = "flex";
}

function ratio() {
    document.location.href = "https://fr.wikipedia.org/wiki/69_(homonymie)";
}

function sang() {
    let sang = document.querySelector(".sang");
    sang.classList.add("active");
}

function flopmode() {
    let cle = document.querySelector(".home .illustration");
    rotate = rotate + 30;
    cle.style.transform = "rotate(" + rotate + "deg)";

    if (rotate >= 90) {
        cle.style.transform = "rotate(" + 500 + "deg)";
        const cssFile = "flop.css";
        const cssLinkIndex = 0;
        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);

        document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
    }
}