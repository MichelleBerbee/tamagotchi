/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var pnc1 = 100;
var aapje1 = document.querySelector("#pnc1");

var pnc2 = 100;
var aapje2 = document.querySelector("#pnc2");

var pnc3 = 100;
var aapje3 = document.querySelector("#pnc3");

var tekst = ["Ik wil slapen", "Ik heb honger", "Ik wil spelen"];

var aap = document.querySelectorAll("img")[0];

function aapjelach() {
    if (pnc1 < 20 || pnc2 < 20 || pnc3 < 20) {
        aap.src = "verbaasd.png";

    } else {
        aap.src = "aap.png";
    }

}

function percentage1() {

    pnc1 = pnc1 - 3;
    if (pnc1 < 0) {
        pnc1 = 0;
    }

    if (pnc1 === 0) {
        aapje1.textContent = tekst[0];

    } else {
        aapje1.textContent = pnc1 + "%";
    }
    aapjelach();
}

window.setInterval(percentage1, 1000);


function percentage2() {

    pnc2 = pnc2 - 4;
    if (pnc2 < 0) {
        pnc2 = 0;
    }

    if (pnc2 === 0) {
        aapje2.textContent = tekst[1];

    } else {
        aapje2.textContent = pnc2 + "%";

    }
    aapjelach();
}

window.setInterval(percentage2, 1000);

function percentage3() {

    pnc3 = pnc3 - 2;
    if (pnc3 < 0) {
        pnc3 = 0;
    }

    if (pnc3 === 0) {
        aapje3.textContent = tekst[2];

    } else {
        aapje3.textContent = pnc3 + "%";
    }
    aapjelach();
}

window.setInterval(percentage3, 1000);



function reactie1() {
    pnc2 = pnc2 + 5;
    if (pnc2 > 100) {
        pnc2 = 100;

    }
    var audio1 = new Audio("audio/boer.mp3");
    audio1.play();


    aapje2.textContent = pnc2 + "%";
}

function reactie2() {
    pnc1 = pnc1 + 5;
    if (pnc1 > 100) {
        pnc1 = 100;

    }

    var audio2 = new Audio("audio/snurk.wav");
    audio2.play();

    aapje1.textContent = pnc1 + "%";
}


function reactie3() {
    pnc3 = pnc3 + 5;
    if (pnc3 > 100) {
        pnc3 = 100;

    }

    var audio3 = new Audio("audio/aapgeluid.wav");
    audio3.play();


    aapje3.textContent = pnc3 + "%";
}



function klikopknop(event) {
    if (event.target.id == "banaan") {
        reactie1();
    }
    if (event.target.id == "zzz") {
        reactie2();
    }
    if (event.target.id == "bal") {
        reactie3();
    }

}

var buttonArray = document.querySelectorAll(".knopje");

for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", klikopknop);
}
