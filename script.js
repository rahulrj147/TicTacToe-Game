let turn = document.querySelector("[xo]");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let box5 = document.querySelector(".box5");
let box6 = document.querySelector(".box6");
let box7 = document.querySelector(".box7");
let box8 = document.querySelector(".box8");
let box9 = document.querySelector(".box9");
let Whoseturn = document.querySelector(".whose-turn");
let result = document.querySelector(".result")
let newgame = document.querySelector(".new-game");

Whoseturn.classList.add("active");
function changeturn(){
    if(turn.textContent === "X"){
        turn.textContent = "O";
    }else{
        turn.textContent = "X";
    }
}

let arr = [[-1,-1,-1] , [-1,-1,-1] , [-1,-1,-1]];
box1.addEventListener("click" , ()=>{
  if(box1.textContent===""){
    box1.textContent = turn.textContent;
    arr[0][0] = box1.textContent;
    changeturn();
    winnerFound(0,0);
    isthegametie();
  }
})
box2.addEventListener("click" , ()=>{    
  if(box2.textContent===""){
    box2.textContent = turn.textContent;
    arr[0][1] = box2.textContent;
    changeturn();
    winnerFound(0,1);
    isthegametie();
  }
})
box3.addEventListener("click" , ()=>{
  if(box3.textContent===""){
    box3.textContent = turn.textContent;
    arr[0][2] = box3.textContent;
    changeturn();
    winnerFound(0,2);
    isthegametie();
  }
})
box4.addEventListener("click" , ()=>{
  if(box4.textContent===""){
    box4.textContent = turn.textContent;
    arr[1][0] = box4.textContent;
    changeturn();
    winnerFound(1,0);
    isthegametie();
  }
})
box5.addEventListener("click" , ()=>{
  if(box5.textContent===""){
    box5.textContent = turn.textContent;
    arr[1][1] = box5.textContent;
    changeturn();
    winnerFound(1,1);
    isthegametie();
  }
})
box6.addEventListener("click" , ()=>{
  if(box6.textContent===""){
    box6.textContent = turn.textContent;
    arr[1][2] = box6.textContent;
    changeturn();
    winnerFound(1,2);
    isthegametie();
  }
})
box7.addEventListener("click" , ()=>{
  if(box7.textContent===""){
    box7.textContent = turn.textContent;
    arr[2][0] = box7.textContent;
    changeturn();
    winnerFound(2,0);
    isthegametie();
  }
})
box8.addEventListener("click" , ()=>{
  if(box8.textContent===""){
    box8.textContent = turn.textContent;
    arr[2][1] = box8.textContent;
    changeturn();
    winnerFound(2,1);
    isthegametie();
  }
})
box9.addEventListener("click" , ()=>{
  if(box9.textContent===""){
    box9.textContent = turn.textContent;
    arr[2][2] = box9.textContent;
    changeturn();
    winnerFound(2,2);
    isthegametie();
  }
})
function winnerFound(i, j) {
  let value = arr[i][j];
  let win = true;

  // Check row
  for (let s = 0; s < 3; s++) {
    if (arr[i][s] !== value) {
      win = false;
      break;
    }
  }
  if (win) {
    declareWinner(value);
    return;
  }

  // Check column
  win = true;
  for (let s = 0; s < 3; s++) {
    if (arr[s][j] !== value) {
      win = false;
      break;
    }
  }
  if (win) {
    declareWinner(value);
    return;
  }

  // Check main diagonal
  if (i === j) {
    win = true;
    for (let s = 0; s < 3; s++) {
      if (arr[s][s] !== value) {
        win = false;
        break;
      }
    }
    if (win) {
      declareWinner(value);
      return;
    }
  }

  // Check anti-diagonal
  if (i + j === 2) {
    win = true;
    for (let s = 0; s < 3; s++) {
      if (arr[s][2 - s] !== value) {
        win = false;
        break;
      }
    }
    if (win) {
      declareWinner(value);
      return;
    }
  }
}

let winnermilgya = false;

function declareWinner(value) {
  winnermilgya = true;
  Whoseturn.classList.remove("active");
  result.classList.add("active");
  result.textContent = `Winner is - ${value}`;
  newgame.classList.add("active");
}

newgame.addEventListener("click", newgamestart);
function newgamestart(){
  box1.textContent = "";
  box2.textContent = "";
  box3.textContent = "";
  box4.textContent = "";
  box5.textContent = "";
  box6.textContent = "";
  box7.textContent = "";
  box8.textContent = "";
  box9.textContent = "";
  result.classList.remove("active");
  Whoseturn.classList.add("active");
  arr = [[-1,-1,-1] , [-1,-1,-1] , [-1,-1,-1]];

}

function isthegametie(){
  for(let i = 0;i<3;i++){
    for(let j = 0;j<3;j++){
      if(arr[i][j]==-1) return;
    }
  }
 if(!winnermilgya){
  Whoseturn.classList.remove("active");
  result.classList.add("active");
  result.textContent = `Game is tie`;
  newgame.classList.add("active");
 }


}






