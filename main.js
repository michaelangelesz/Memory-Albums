const cards = document.querySelectorAll(".memory-card");

const playerLivesCount = document.querySelector("span");
let playerLives = 16;

// link text
playerLivesCount.textContent = playerLives;

let intialFlip = false;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (!intialFlip) {
    intialFlip = true;
  }

  // locks board so you can't click more than 2 cards at a time
  if (lockBoard) return;
  // prevents double clicking on the same card
  if (this === firstCard) return;
  this.classList.add("flip");
  // first click
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  secondCard = this;
  checkForMatch();
}

let count = 0;

function checkForMatch() {
  // ternary operator is if/else statement in one line
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  // condition ? true : false
  isMatch ? disableCards() : unflipCards();

  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    count++;
    console.log("Function has been called " + count + " times.");
    if (count === 12) {
      winGame();
    }
    resetBoard();
  }

  function unflipCards() {
    // lock the board
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      // unlocks board after 1.5 seconds
      resetBoard();
    }, 1500);
    playerLives--;
    playerLivesCount.textContent = playerLives;
    if (playerLives === 0)
      setTimeout(() => {
        gameOver();
      }, 500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 18);
    card.style.order = randomPos;
  });
})();

// show message function
function showMessage(text, buttonText) {
  setTimeout(() => {
    const messageDiv = document.createElement("div");
    messageDiv.setAttribute("id", "message");
    messageDiv.textContent = text;

    // create play again button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = buttonText;
    playAgainBtn.addEventListener("click", () => {
      newGame();
      messageDiv.style.opacity = "0";
      setTimeout(() => {
        messageDiv.remove();
      }, 300);
    });

    // add play again button to message div
    messageDiv.appendChild(playAgainBtn);
    document.body.appendChild(messageDiv);

    // animate message div
    messageDiv.style.opacity = "1";
  }, 500);
}

function gameOver() {
  lockBoard = true;
  showMessage("Bummer! 😵‍💫 You lose!", "Try again");
}

function winGame() {
  showMessage("Awesome! 🤘 You Rock!", "Play again");
  console.log("Count has reached 12.");
}

function newGame() {
  location.reload();
}

cards.forEach((card) => card.addEventListener("click", flipCard));
