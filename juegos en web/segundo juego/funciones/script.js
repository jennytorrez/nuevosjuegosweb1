let userTotalScore = 0;
let machineTotalScore = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    const userDice1 = rollDice();
    userTotalScore = userDice1;
    const machineDice1 = rollDice();
    machineTotalScore = machineDice1;

    document.getElementById("userDice1").textContent = "🎲 " + userDice1;
    document.getElementById("machineDice1").textContent = "🎲 " + machineDice1;

    document.getElementById("userScore").textContent = userTotalScore;
    document.getElementById("machineScore").textContent = machineTotalScore;

    determineWinner();
}

function determineWinner() {
    let message = "";

    if (userTotalScore > machineTotalScore) {
        message = "¡Ganaste!";
    } else if (machineTotalScore > userTotalScore) {
        message = "Perdiste.";
    } else {
        message = "Es un empate.";
    }
    document.getElementById("message").textContent = message + " usuario  " + userTotalScore + ", Máquina: " + machineTotalScore;
}


