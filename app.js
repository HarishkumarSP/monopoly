
var board=[10, 20, 30, 40, 50, 60,70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board);

const player1_button = document.getElementById('player-1');
const player2_button = document.getElementById('player-2');

console.log(player1_button);
console.log(player2_button);


player1_button.addEventListener('click', rollDice_1);


//player1 array
var player1=["Harish",0,1000];


//player-1 rolling dice

function rollDice_1(){
    let position= Math.floor(Math.random()*6)+1;
    console.log("player-1 rolls",position);
    changePosition_1(player1[1],position);
}

//update player-1 position

function changePosition_1(old,currentPos){
   var newPosition=old+currentPos;
   player1[1]=newPosition;
   console.log(player1[1]); 
   updateMoney_1(player1[1]);
}

 //update the money

function updateMoney_1(p1){
    var updateMoney=0;  
    if(p1<board.length){
        updateMoney=player1[2]-board[p1-1];
    }
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    console.log(updateMoney);
}



player2_button.addEventListener('click',rolldice_2);

//player2 array
var player2=["Kumar",0,1000];

//player-2 rolling dice
function rollDice_2(){
    let position= Math.floor(Math.random()*6)+1;
    console.log("player-2 rolls",position);
    changePosition_2(player2[1],position);
}

//update player-2 position
function changePosition_2(old,currentPos){
    var newPosition=old+currentPos;
    player2[1]=newPosition;
    console.log(player2[1]); 
    updateMoney_1(player2[1]);
 }

 //update the money

function updateMoney_2(p2){
    var updateMoney=0;  
    if(p2<board.length){
        updateMoney=player2[2]-board[p2-1];
    }
    else{
        p2=p2%15;
        updateMoney=player2[2]-board[p2-1];
    }
    console.log(updateMoney);
}

