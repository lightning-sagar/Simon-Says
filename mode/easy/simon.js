let gameseq=[];
let userseq=[];


let started=false;
let level=0;
let btns=["red","yellow","purple","green","flash"];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let score = 0;
// let score=document.querySelector("score");
// h3.innerText=`HIGHTEST SCORE ${score}`;


document.addEventListener("keypress",function(){
    if (started == false){
        started=true;
        levelup();
        document.querySelector(".start").style.display = "none";
    }
})

+
function btnflash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");
    },300);
}

function gameflash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash"); 
    },300);
}

function userflash(btns){
    btns.classList.add("userflash");
    setTimeout(function(){
        btns.classList.remove("userflash"); 
    },300);
}

function levelup(){
    userseq=[]
    level++;

    h2.innerText=`level ${level}`;

    let rand=Math.floor(Math.random()*4);
    let randcolor=btns[rand];
    let randbtn=document.querySelector(`.${randcolor}`);
    
    gameseq.push(randcolor);
    console.log(gameseq);

   

    gameflash(randbtn);
}

function check(index){
    if(userseq[index]===gameseq[index]){
        console.log(userseq);
        console.log(userseq[index]);
        console.log("same index");
        console.log(gameseq[index]);
        if(userseq.length == gameseq.length){
            console.log("same index");
            setTimeout(levelup,500);
        }
    }
    else{
        console.log("wrong press");
        h2.innerText=`Game over press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#f0f0f0";
        },160);
        reset();
    }
}

// function check() {
//     for (let i = 0; i < userseq.length; i++) {
//         if (userseq[i] !== gameseq[i]) {
//             console.log("Wrong press");
//             h2.innerText = "Game over. Press any key to restart.";
//             reset();
//             return;
//         }
//     }

//     if (userseq.length === gameseq.length) {
//         setTimeout(levelup, 500);
//     }
// }

function btnpress(){
    let btn=this;
    userflash(btn); 

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}



function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level = 0;
}


