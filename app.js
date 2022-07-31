const gameScreen = document.querySelector(".board-hidden");
const playButton = document. querySelector(".play-btn");
const backButton = document.querySelector(".back");
const restart = document.querySelector(".restart");
const cells = document.querySelectorAll(".cell");
const scoreCard= document.querySelector("#score-card");
let gameOver = false;
let draw = false;

// CLICK EVENTS
playButton.addEventListener("click", () => {
    gameScreen.classList.add("game-screen");
});


backButton.addEventListener("click", () => {
    gameScreen.classList.remove("game-screen");
});


// Clear Cell Content
const  deleteCellValues = () => {
    cells.forEach(cell => {
        cell.textContent = "";
    });
};




const tictTacToe = (() => {
    // clickedCells Arr helps keep track of clicked cells so that if all cells are clicked 
    // and there is no winner then game is draw.
    let clickedCells = [];

    // Create Player
    const player = marker => {
        return {marker}
    };
    let player_X = player("x");
    let player_O = player("o");
    // Get marker
    let marker = player_X.marker;
    // First Player
    scoreCard.textContent = `Player ${marker.toUpperCase()} playing`;

    //Reset Game
    const resetGame = () => {
        player_X = player("x");
        player_O = player("o");
        gameOver = false;
        deleteCellValues();
        scoreCard.textContent = "";
        clickedCells = [];
        marker = player_X.marker;
    }
    restart.addEventListener("click", resetGame);

    // Show winner
    const returnWinner = winner => {
        scoreCard.textContent = `Player ${winner} wins`;
        player_X.marker = "";
        player_O.marker = "";
        gameOver = true;
    }
    // Check for draw
    const checkDraw = (cell) => {
        if (!gameOver) {
            clickedCells.push(cell);
            if (clickedCells.length === 9) {
                scoreCard.textContent = "Draw";
                gameOver=true;
            }
        } 
    }

    const checkWinner = () => {
        // Horizontal Check
        if (one.textContent !== "" && one.textContent === two.textContent && two.textContent === three.textContent ) {
            returnWinner(one.textContent);
        }
        else if (four.textContent !== "" && four.textContent === five.textContent && five.textContent === six.textContent) {
            returnWinner(four.textContent);
        }
        else if (seven.textContent !== "" && seven.textContent === eight.textContent && eight.textContent === nine.textContent) {
            returnWinner(seven.textContent);
        }
        // Vertical
        else if (one.textContent !== "" && one.textContent === four.textContent && four.textContent === seven.textContent) {
            returnWinner(one.textContent);
        }
        else if (two.textContent !== "" && two.textContent === five.textContent && five.textContent === eight.textContent) {
            returnWinner(two.textContent);
        }
        else if (three.textContent !== "" &&  three.textContent === six.textContent && six.textContent === nine.textContent) {
            returnWinner(three.textContent);
        }
        // Diagonal
        else if (one.textContent !== "" && one.textContent === five.textContent && five.textContent === nine.textContent) {
            returnWinner(one.textContent);
        }
        else if (three.textContent !== "" && three.textContent === five.textContent && five.textContent === seven.textContent) {
            returnWinner(three.textContent);
        }   

    };

    // Play
    cells.forEach(cell => {
        cell.addEventListener("click", (e) => {
            if (e.target.textContent === "") {
                if (marker === player_X.marker) {
                    e.target.textContent = marker;
                    checkWinner();
                    checkDraw(e.target);
                    marker = player_O.marker; 
                    !gameOver ? scoreCard.textContent = `Player ${marker.toUpperCase()} playing`: null; 
                } else {
                    e.target.textContent = marker;
                    checkWinner();
                    checkDraw(e.target);
                    marker = player_X.marker;
                    !gameOver ? scoreCard.textContent = `Player ${marker.toUpperCase()} playing`: null; 
                }
            } 
        });
    });
})();

