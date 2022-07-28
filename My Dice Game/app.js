let totalScore1 = document.getElementById("totalScore1");
let totalScore2 = document.getElementById("totalScore2");
let turnPlayer1 = document.getElementById("player1Name");
const turnPlayer2 = document.getElementById("player2Name");
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let result = document.getElementById("result");
const diceBtn = document.getElementById("diceBtn");
const resetBtn = document.getElementById("resetBtn")
const images = document.getElementsByClassName("images")

function showResetBtn() {
    diceBtn.style.display = "none"
    resetBtn.style.display = "block"
}

diceBtn.addEventListener("click", function() {

    if(player1Turn) {
        const randomNumber1 = Math.floor(Math.random() *6)+1;
        const randomImage1 = 'images/dice' + randomNumber1 + '.png'
        document.querySelectorAll("img")[0].setAttribute('src', randomImage1);
        player1Score += randomNumber1;
        totalScore1.textContent = player1Score;
        turnPlayer1.classList.remove("active")
        turnPlayer2.classList.add("active")
        result.textContent = "Player 2 turn"
        
    }
    else{
        const randomNumber2 = Math.floor(Math.random() *6)+1;
        const randomImage2 = 'images/dice' + randomNumber2 + '.png'
        document.querySelectorAll("img")[1].setAttribute('src', randomImage2);
        player2Score += randomNumber2;
        totalScore2.textContent = player2Score;
        turnPlayer2.classList.remove("active")
        turnPlayer1.classList.add("active")
        result.textContent = "Player 1 turn"
    }

    if(player1Score >= 20) {
        result.textContent = "Player 1 has Won 🤑"
        showResetBtn()
    }else if(player2Score >= 20) {
        result.textContent  = "Player 2 has Won 🥳 "
        showResetBtn()
    }
    
    player1Turn = !player1Turn;
})

resetBtn.addEventListener("click", function(){
    resetGame()
})


function resetGame() {
    player1Score = 0;
    player2Score = 0;
    totalScore1.textContent = "-";
    totalScore2.textContent = "-";
    player1Turn = true;
    result.textContent = "Player 1 turn";
    turnPlayer2.classList.remove("active")
    turnPlayer1.classList.add("active")
    resetBtn.style.display = "none";
    diceBtn.style.display = "block"
    images.style.display = "none"
}

