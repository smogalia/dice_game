let dice = document.getElementById("dice");
let roll = document.getElementById("role_dice");
let count = 0;
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let score = document.getElementById("score");
let player1_selected = document.getElementById("player1_selected");
let player2_selected = document.getElementById("player2_selected");
let reset = document.getElementById("reset");

let player_turn= Math.floor(Math.random() * 2) + 1;

//nouvelle partie
reset.addEventListener("click", function () {
    newRound();
});

//indique le joueur qui doit jouer
function newRound(){
    if(player_turn === 1){
        player_turn = 2;
        player2_selected.style.opacity = "1";
        player1_selected.style.opacity = "0";
    } else {
        player_turn = 1;
        player1_selected.style.opacity = "1";
        player2_selected.style.opacity = "0";
    }
}




roll.addEventListener("click", function () {
    DiceAnimation();
    count = count + a;
    //enregistre le score du joueur en fonction de son tour
    if (player_turn === 1) {
        result1.innerText = count;
    } else {
        result2.innerText = count;
    }
});

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function DiceAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            a=rollDice();
            dice.setAttribute('src', './assets/img/face-' + a + '.png');
            score.innerText = a;
        }, 50 * i);
    }
}
