let dice = document.getElementById("dice");
let roll = document.getElementById("role_dice");
let count = 0;

roll.addEventListener("click", function () {
    DiceAnimation();
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
        }, 100 * i);
    }
    count=count+a;
    winner.innerText = count;
}