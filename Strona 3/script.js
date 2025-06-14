let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const restartBtn = document.getElementById("restartBtn");
    const guessList = document.getElementById("guessList");
    const guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Podaj liczbę od 1 do 100!";
        message.style.color = "red";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `🎉 Brawo! Zgadłeś w ${attempts} próbach!`;
        message.style.color = "green";
        restartBtn.style.display = "inline-block";
    } else if (guess < randomNumber) {
        message.textContent = "🔼 Za mało!";
        message.style.color = "orange";
    } else {
        message.textContent = "🔽 Za dużo!";
        message.style.color = "orange";
    }

    const listItem = document.createElement("li");
    listItem.textContent = guess;
    guessList.appendChild(listItem);

    input.value = "";
    input.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessList").innerHTML = "";
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").focus();
}
