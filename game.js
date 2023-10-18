<!DOCTYPE html>
<html>
<head>
    <title>Stone, Paper, Scissors Game</title>
</head>
<body>
    <h1>Stone, Paper, Scissors Game</h1>
    <p>Make your choice:</p>
    <button id="stone">Stone</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
    <p id="result">Choose an option to play.</p>

    <script>
        const userChoices = document.querySelectorAll("button");
        const resultMessage = document.getElementById("result");

        userChoices.forEach((choice) => {
            choice.addEventListener("click", playGame);
        });

        function playGame(e) {
            const userChoice = e.target.id;
            const computerChoice = generateComputerChoice();
            const result = getGameResult(userChoice, computerChoice);

            resultMessage.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;
        }

        function generateComputerChoice() {
            const choices = ["Stone", "Paper", "Scissors"];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function getGameResult(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                return "It's a tie!";
            } else if (
                (userChoice === "Stone" && computerChoice === "Scissors") ||
                (userChoice === "Paper" && computerChoice === "Stone") ||
                (userChoice === "Scissors" && computerChoice === "Paper")
            ) {
                return "You win!";
            } else {
                return "Computer wins!";
            }
        }
    </script>
</body>
</html>
