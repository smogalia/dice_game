let dice = document.getElementById("dice");
let roll = document.getElementById("role_dice");
let count = 0;
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let score = document.getElementById("score");
let player1_selected = document.getElementById("player1_selected");
let player2_selected = document.getElementById("player2_selected");
let player1_coin = document.getElementById("player1_coin");
let player2_coin = document.getElementById("player2_coin");
let reset = document.getElementById("reset");
let hold = document.getElementById("hold");
let player_turn;

//nouvelle partie
reset.addEventListener("click", function () {
    //définir le joueur qui commence
    player_turn= Math.floor(Math.random() * 2) + 1;
    newRound();
});

hold.addEventListener("click", function () {
    //enregistre le score du joueur en fonction de son tour
    if (player_turn === 1) {
        result1.innerText = count;
    } else {
        result2.innerText = count;
    }
    count = 0;
    newRound();
});

//indique le joueur qui doit jouer
function newRound(){
    if(player_turn === 1){
        player_turn = 2;
        player2_coin.style.opacity = "1";
        player1_coin.style.opacity = "0";
        player2_selected.style.textDecorationLine = "underline";
        player1_selected.style.textDecorationLine = "none";
        player2_selected.style.fontWeight = "bold";
        player1_selected.style.fontWeight = "normal";
    } else {
        player_turn = 1;
        player1_coin.style.opacity = "1";
        player2_coin.style.opacity = "0";
        player1_selected.style.textDecorationLine = "underline";
        player2_selected.style.textDecorationLine = "none";
        player1_selected.style.fontWeight = "bold";
        player2_selected.style.fontWeight = "normal";
    }
}





//la fonction qui permet de lancer le dé
roll.addEventListener("click", function () {
    DiceAnimation();
    //si le joueur fait un 1, il perd son score et le tour passe au joueur suivant
    if(a === 1){
        count = 0;
        newRound();
    }
    else{
        count = count + a;
        //enregistre le score du joueur en fonction de son tour
        if (player_turn === 1) {
            result1.innerText = count;
        } else {
            result2.innerText = count;
        }
    }
});
//résultat du dé
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
//animation du dé
function DiceAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            a=rollDice();
            dice.setAttribute('src', './assets/img/face-' + a + '.png');
            score.innerText = a;
        }, 50 * i);
    }
}
