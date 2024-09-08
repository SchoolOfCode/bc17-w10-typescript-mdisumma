console.log(document);
const container = document
    .querySelector(".container")
    .addEventListener("click", function (e) {
    console.log(e);
});
const choices = ["rock", "paper", "scissors"];
let totalScore = 0;
let playerMove;
let computerMove;
let gameScore = 0;
function getWinner(player, app, score, total) {
    let data = [];
    while (true) {
        // player = prompt("Please insert a value");
        // app = choices[Math.floor(Math.random() * 3)];
        if (player === null) {
            console.log("Prompt closed. Game ended.");
            break;
        }
        // If player chooses rock and computer choose rocks.
        if (player === choices[0] && app === choices[0]) {
            console.log("Its a draw");
            score = 0;
        }
        // If player chooses rock and computer chooses paper.
        if (player === choices[0] && app === choices[1]) {
            console.log("You lose");
            score = -1;
        }
        // If player chooses rock and computer chooses scissors.
        if (player === choices[0] && app === choices[2]) {
            console.log("You win");
            score = 1;
        }
        // If player chooses paper and computer chooses rock.
        if (player === choices[1] && app === choices[0]) {
            console.log("You win");
            score = 1;
        }
        // If player chooses paper and computer chooses paper.
        if (player === choices[1] && app === choices[1]) {
            console.log("Its a draw");
            score = 0;
        }
        // If player chooses paper and computer chooses scissors.
        if (player === choices[1] && app === choices[2]) {
            console.log("You lose");
            score = -1;
        }
        // If player chooses scissors and computer chooses rock.
        if (player === choices[2] && app === choices[0]) {
            console.log("You lose");
            score = -1;
        }
        // If player chooses scissors and computer chooses paper.
        if (player === choices[2] && app === choices[1]) {
            console.log("You win");
            score = 1;
        }
        // If player chooses scissors and computer chooses scissors.
        if (player === choices[2] && app === choices[2]) {
            console.log("Its a draw");
            score = 0;
        }
        // console.log(`player:${player} app:${app} score:${score}`);
        total = total + score;
        data.push({ player: player, app: app, score: score, total: total });
    }
    return data;
}
const result = getWinner(playerMove, computerMove, gameScore, totalScore);
console.log(result);
