// const gameScreen = document.querySelector(".board-hidden");
// const playButton = document. querySelector(".play-btn");
// const backButton = document.querySelector(".back");
// const restart = document.querySelector(".restart");
// const cells = document.querySelectorAll(".cell");
// const scoreCard= document.querySelector("#score-card");
// let gameOver = false;
// let marker = "X";
// let possibleNodes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];


// // Cells
// const one = document.querySelector("#one");
// const two = document.querySelector("#two")
// const three = document.querySelector("#three")
// const four = document.querySelector("#four")
// const five = document.querySelector("#five")
// const six = document.querySelector("#six")
// const seven = document.querySelector("#seven")
// const eight = document.querySelector("#eight")
// const nine = document.querySelector("#nine")

// // Delete Cell Content
// const  deleteCellValues = () => {
//     cells.forEach(cell => {
//         cell.textContent = null;
//     });
// };


// // Play
// const  playGame = () => {

//     const returnWinner = winner => {
//         scoreCard.textContent = `Player ${winner} wins`;
//         marker = "";
//         possibleNodes = [];
//         gameOver = true;
//     }

//     const checkWinner = () => {
//         // Horizontal Check
//         if (one.textContent !== "" && one.textContent === two.textContent && two.textContent === three.textContent ) {
//             returnWinner(one.textContent);
//         }
//         else if (four.textContent !== "" && four.textContent === five.textContent && five.textContent === six.textContent) {
//             returnWinner(four.textContent);
//         }
//         else if (seven.textContent !== "" && seven.textContent === eight.textContent && eight.textContent === nine.textContent) {
//             returnWinner(seven.textContent);
//         }
//         // Vertical
//         else if (one.textContent !== "" && one.textContent === four.textContent && four.textContent === seven.textContent) {
//             returnWinner(one.textContent);
//         }
//         else if (two.textContent !== "" && two.textContent === five.textContent && five.textContent === eight.textContent) {
//             returnWinner(two.textContent);
//         }
//         else if (three.textContent !== "" &&  three.textContent === six.textContent && six.textContent === nine.textContent) {
//             returnWinner(three.textContent);
//         }
//         // Diagonal
//         else if (one.textContent !== "" && one.textContent === five.textContent && five.textContent === nine.textContent) {
//             returnWinner(one.textContent);
//         }
//         else if (three.textContent !== "" && three.textContent === five.textContent && five.textContent === seven.textContent) {
//             returnWinner(three.textContent);
//         }
//     }


//     const genRandomNum = () => {
//         const randomNumber = Math.round(Math.floor(Math.random() * possibleNodes.length));
//         return randomNumber;
//     }
//     const removePlayedNode = (node) =>{
//         let clickedIndex = possibleNodes.indexOf(node);
//             possibleNodes.splice(clickedIndex, 1);
//     }
//     const genCompOption = () => {
//         console.log(possibleNodes);
//         let randomId = genRandomNum();
//         const randomCell = document.getElementById(possibleNodes[randomId]);
//         if (possibleNodes.length > 0 && randomCell.textContent === "") {
//             randomCell.textContent = "o";
//             removePlayedNode(possibleNodes[randomId]);
//             checkWinner();
//         }
//         else {
//             scoreCard.textContent = "Draw"
//         }
//     };

//     cells.forEach(cell => {
//         cell.addEventListener("click", (e) => {
//             if (e.target.textContent === "") {
//                 e.target.textContent = marker;
//                 removePlayedNode(e.target.id);
//                 checkWinner()
//                 if (!gameOver) {        
//                     setTimeout(genCompOption, 200);
//                 }
//             } 
//         });
//     });
// }
// playGame();

// // Reset Some defaults
// const setDefaults = () => {
//     marker = "X";
//     possibleNodes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     gameOver = false;
// }

// // Restart Game
// const restartGame = () => {
//     deleteCellValues();
//     setDefaults();
//     playGame();
// }

// // EVENTS
// playButton.addEventListener("click", () => {
//     gameScreen.classList.add("game-screen");
// });
// backButton.addEventListener("click", () => {
//     gameScreen.classList.remove("game-screen");
//     restartGame();
// });
// restart.addEventListener("click", restartGame);