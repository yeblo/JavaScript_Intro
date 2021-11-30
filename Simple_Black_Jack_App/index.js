

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#msgDisplay");
let cardEl = document.querySelector("#cardDisplay");

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";


let player = {
     name : "Per",
     chips : 145
}



let playerEL = document.getElementById("player-el");

playerEL.textContent = player.name + ": $" + player.chips

console.log(firstCard);
console.log(secondCard);
console.log(sum);

function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1;
    //return Math.floor(Math.random() * 11) + 2;

    if (rand === 1) {
        return 11;
    }
    else if (rand >= 11) {
        return 10
    } else {
        return rand;
    }
}
function renderGame() {
    cardEl.textContent = " Card:  "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw again?";

    } else if (sum === 21) {
        message = "Woohoo! You 've got Blackjack! ";
        hasBlackJack = true
    } else {
        message = "You are out of the game";
        isAlive = false
    }


    messageEl.textContent = message;
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
}

function newGame() {

    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        console.log(cards)

        renderGame();
    }


}

//Cash out!

console.log(message);
console.log(hasBlackJack);
console.log(isAlive);