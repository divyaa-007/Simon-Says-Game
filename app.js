let gameSeq = [];
let userSeq = [];

let btns = ["red" , "yellow" , "green" , "purple"];

let started = false;
let level = 0;
let Hlevel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if(started == false){
    console.log("Game Started")
    started = true;

    levelUp();
   }
}); 

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        }, 250);
}

function levelUp(){
    userSeq = [];
    level++;

    if(level>Hlevel){
        Hlevel = level;
    }
  
    h2.innerText = `Level: ${level}`;

    // random btn choose
    let randomIdx = btns[Math.floor(Math.random() * btns.length)];
    let randomBtn = document.querySelector(`.${randomIdx}`);
    gameSeq.push(randomIdx);
    console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,500);
    }
  }else{
    h2.innerHTML = `Game Over! Your score was <b>${Hlevel}</b>  <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
     document.querySelector("body").style.backgroundColor = "white"
    },350);
    
    reset();
  }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}