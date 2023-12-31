let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["red", "yellow", "purple", "green", "flash"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let score = 0;
const press = document.querySelector(".press");
press.style.display = "flex";

press.addEventListener("click", function () {
    if (started == false) {
        started = true;
        levelup();
        document.querySelector(".press").style.display = "none";
    }
});

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelup();
        document.querySelector(".start").style.display = "none";
    }
});

function btnflash(btns) {
    btns.classList.add("flash");
    setTimeout(function () {
        btns.classList.remove("flash");
    }, 70);
}

function gameflash(btns) {
    btns.classList.add("flash");
    setTimeout(function () {
        btns.classList.remove("flash");
    }, 500);
}

function userflash(btns) {
    btns.classList.add("userflash");
    setTimeout(function () {
        btns.classList.remove("userflash");
    }, 500);
}

function levelup() {
    userseq = [];
    level++;

    h2.innerText = `level ${level}`;

    let rand = Math.floor(Math.random() * 4);
    let randcolor = btns[rand];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn);
}

function check(index) {
    if (userseq[index] === gameseq[index]) {
        console.log(userseq);
        console.log(userseq[index]);
        console.log("same index");
        console.log(gameseq[index]);
        if (userseq.length == gameseq.length) {
            console.log("same index");
            setTimeout(levelup, 500);
        }
    } else {
        console.log("wrong press");
        h2.innerText = `Game over press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#f0f0f0";
        }, 160);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    press.style.display = "flex";
}