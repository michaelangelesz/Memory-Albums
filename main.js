// const cards = document.querySelectorAll(".memory-card");
const section = document.querySelector("section");
section.setAttribute("class", "memory-game");

const playerLivesCount = document.querySelector("span");
let playerLives = 16;

// link text
playerLivesCount.textContent = playerLives;

// generate the data
const getData = () => [
  { imgSrc: "../images/bboys.jpeg", name: "bboys", alt: "Paul's Boutique" },
  { imgSrc: "../images/bboys.jpeg", name: "bboys", alt: "Paul's Boutique" },
  { imgSrc: "../images/bjork.jpeg", name: "bjork", alt: "Debut" },
  { imgSrc: "../images/bjork.jpeg", name: "bjork", alt: "Debut" },
  { imgSrc: "../images/cure.jpeg", name: "cure", alt: "Three Imaginary Boys" },
  { imgSrc: "../images/cure.jpeg", name: "cure", alt: "Three Imaginary Boys" },
  { imgSrc: "../images/doors.jpeg", name: "doors", alt: "Morrison Hotel" },
  { imgSrc: "../images/doors.jpeg", name: "doors", alt: "Morrison Hotel" },
  { imgSrc: "../images/floyd.jpeg", name: "floyd", alt: "Dark Side Of The Moon" },
  { imgSrc: "../images/floyd.jpeg", name: "floyd", alt: "Dark Side Of The Moon" },
  { imgSrc: "../images/jimi.jpeg", name: "jimi", alt: "Electric Ladyland" },
  { imgSrc: "../images/jimi.jpeg", name: "jimi", alt: "Electric Ladyland" },
  { imgSrc: "../images/lusciousj.jpeg", name: "lusciousj", alt: "Fever In Fever Out" },
  { imgSrc: "../images/lusciousj.jpeg", name: "lusciousj", alt: "Fever In Fever Out" },
  { imgSrc: "../images/madonna.jpeg", name: "madonna", alt: "Like A Virgin" },
  { imgSrc: "../images/madonna.jpeg", name: "madonna", alt: "Like A Virgin" },
  { imgSrc: "../images/marley.jpeg", name: "marley", alt: "Legend" },
  { imgSrc: "../images/marley.jpeg", name: "marley", alt: "Legend" },
  { imgSrc: "../images/redhot.jpeg", name: "redhot", alt: "One Hot Minute" },
  { imgSrc: "../images/redhot.jpeg", name: "redhot", alt: "One Hot Minute" },
  { imgSrc: "../images/tribe.jpeg", name: "tribe", alt: "The Low End Theory" },
  { imgSrc: "../images/tribe.jpeg", name: "tribe", alt: "The Low End Theory" },
  { imgSrc: "../images/u2.jpeg", name: "u2", alt: "The Joshua Tree" },
  { imgSrc: "../images/u2.jpeg", name: "u2", alt: "The Joshua Tree" },
]; 

// shuffle the cards
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5); // randomize the cards
  return cardData;
};

// card generator
const cardGenerator = () => {
  // call shuffle when cards are generated
  const cardData = randomize();
  // // generate the html
  cardData.forEach((item) => {
    console.log(item);
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    // add the info to the cards
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach the info to the cards
    face.src = item.imgSrc;
    back.src = "../images/cassette.jpeg";
    card.dataset.framework = item.alt; // add data-framework attribute
    // attach the info to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
  console.log(cardData);
};

// let intialFlip = false;
// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (!intialFlip) {
//     intialFlip = true;
//   }

//   // locks board so you can't click more than 2 cards at a time
//   if (lockBoard) return;
//   // prevents double clicking on same card
//   if (this === firstCard) return;
//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     // first click
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//   }

//   // second click
//   secondCard = this;
//   checkForMatch();
// }

// let count = 0;

// function checkForMatch() {
//   // ternary operator is if/else statement in one line
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//   // condition ? true : false
//   isMatch ? disableCards() : unflipCards();

//   function disableCards() {
//     firstCard.removeEventListener("click", flipCard);
//     secondCard.removeEventListener("click", flipCard);
//     count++;
//     console.log("Function has been called " + count + " times.");
//     if (count === 12) {
//       winGame();
//     }
//     resetBoard();
//   }

//   function unflipCards() {
//     // lock the board
//     lockBoard = true;
//     setTimeout(() => {
//       firstCard.classList.remove("flip");
//       secondCard.classList.remove("flip");
//       // unlocks board after 1.5 seconds
//       resetBoard();
//     }, 1500);
//     playerLives--;
//     playerLivesCount.textContent = playerLives;
//     if (playerLives === 0)
//       setTimeout(() => {
//         gameOver();
//       }, 500);
//   }

//   function resetBoard() {
//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];
//   }
// }

// // (function shuffle(cards) {
// //   cards.forEach((card) => {
// //     let randomPos = Math.floor(Math.random() * 18);
// //     card.style.order = randomPos;
// //   });
// // })(document.querySelectorAll(".memory-card"));

// // show message function
// function showMessage(text, buttonText) {
//   setTimeout(() => {
//     const messageDiv = document.createElement("div");
//     messageDiv.setAttribute("id", "message");
//     messageDiv.textContent = text;

//     // create play again button
//     const playAgainBtn = document.createElement("button");
//     playAgainBtn.textContent = buttonText;
//     playAgainBtn.addEventListener("click", () => {
//       newGame();
//       messageDiv.style.opacity = "0";
//       setTimeout(() => {
//         messageDiv.remove();
//       }, 300);
//     });

//     // add play again button to message div
//     messageDiv.appendChild(playAgainBtn);
//     document.body.appendChild(messageDiv);

//     // animate message div
//     messageDiv.style.opacity = "1";
//   }, 500);
// }

// function gameOver() {
//   lockBoard = true;
//   showMessage("Bummer! 😵‍💫 You lose!", "Try again");
// }

// function winGame() {
//   showMessage("Awesome! 🤘 You Rock!", "Play again");
//   console.log("Count has reached 12.");
// }

// function newGame() {
//   location.reload();
// }

// // cards.forEach((card) => card.addEventListener("click", flipCard));

cardGenerator();