let d1 = document.getElementById("dice1");
let d2 = document.getElementById("dice2");
let d3 = document.getElementById("dice3");
let roller = document.getElementById("roller");

roller.addEventListener("click",()=>{

diceNum()
 
})

let diceNum =()=>{
    let num1 = Math.floor(Math.random()*6)+1;
    let num2 = Math.floor(Math.random()*6)+1;
    let num3 = Math.floor(Math.random()*6)+1;
    d1.textContent = num1
    d1.style.textAlign = "center"
    d1.style.alignContent = "center"
    d2.textContent = num2
    d2.style.textAlign = "center"
    d2.style.alignContent = "center"
    d3.textContent = num3
    d3.style.textAlign = "center"
    d3.style.alignContent = "center"

    determineWinner(num1,num2,num3)

}
function determineWinner(num1,num2,num3){
const DiceEle = [
    d1,
    d2,
    d3
]
DiceEle.forEach((dice)=>{
    dice.style.backgroundColor = "";
});

const maxscore = Math.max(num1,num2,num3);
const minscore = Math.min(num1,num2,num3);

const maxDice = [];
const minDice = [];
DiceEle.forEach((dice)=>{
    let score = parseInt(dice.textContent);
    if(score === maxscore){
        maxDice.push(dice)
    }
    if(score === minscore){
        minDice.push(dice)
    }
});

if(maxDice.length === 1){
    maxDice[0].style.backgroundColor = "green"
}else{
    maxDice.forEach((dice)=>{
        dice.style.backgroundColor = "blue"
    })
}
minDice.forEach((dice)=>{
    dice.style.backgroundColor = "red"
})

DiceEle.forEach((dice)=>{
    const score = parseInt(dice.textContent);
    if(score != maxscore && score != minscore){
        dice.style.backgroundColor = "yellow"
    }
})
let winner = "";
if(maxDice.length === 1){
    winner = `Winner is ${
    DiceEle.indexOf(maxDice[0])===0 ? "Player 1" : DiceEle.indexOf(maxDice[0])===1 ? "Player 2" : "Player3"
    }`;
    
}else{
    winner = "DRAW!!!"
}
let Winner = document.getElementById("winner");
Winner.textContent = winner;
}
