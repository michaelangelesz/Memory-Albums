// grab a couple of elements
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 12;

// link text
playerLivesCount.textContent = playerLives;

// generate the data
const getData = () => [
  { imgSrc: "../assets/1_theMagician.jpeg", name: "TheMagician" },
  { imgSrc: "../assets/1_theMagician.jpeg", name: "TheMagician" },
  { imgSrc: "../assets/2_theHighPriestess.jpeg", name: "TheHighPriestess" },
  { imgSrc: "../assets/2_theHighPriestess.jpeg", name: "TheHighPriestess" },
  { imgSrc: "../assets/3_theEmpress.jpeg", name: "TheEmpress" },
  { imgSrc: "../assets/3_theEmpress.jpeg", name: "TheEmpress" },
  { imgSrc: "../assets/4_theEmperor.jpeg", name: "TheEmperor" },
  { imgSrc: "../assets/4_theEmperor.jpeg", name: "TheEmperor" },
  { imgSrc: "../assets/5_theHierophant.jpeg", name: "TheHierophant" },
  { imgSrc: "../assets/5_theHierophant.jpeg", name: "TheHierophant" },
  { imgSrc: "../assets/6_theLovers.jpeg", name: "TheLovers" },
  { imgSrc: "../assets/6_theLovers.jpeg", name: "TheLovers" },
  { imgSrc: "../assets/7_theChariot.jpeg", name: "TheChariot" },
  { imgSrc: "../assets/7_theChariot.jpeg", name: "TheChariot" },
  { imgSrc: "../assets/8_Strength.jpeg", name: "Strength" },
  { imgSrc: "../assets/8_Strength.jpeg", name: "Strength" },
  { imgSrc: "../assets/9_theHermit.jpeg", name: "TheHermit" },
  { imgSrc: "../assets/9_theHermit.jpeg", name: "TheHermit" },
];

// randomize the cards
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5); // randomize the cards
  return cardData;
};

// card generator
const cardGenerator = () => {
  const cardData = randomize();
  // generate the html
  const cards = document.querySelectorAll(".card");
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach the info to the cards
    face.src = item.imgSrc;
    back.src = "../assets/backOfCard.jpg";
    card.setAttribute("name", item.name);
    // attach the info to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    // make the cards flip
    card.addEventListener("click", (e) => {
      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

let flippedCards = 0;

// check for a match
function checkCards(e) {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  console.log(flippedCards);
  // logic:
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      // leave cards flipped if match
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      // flip cards back if not match
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0)
        setTimeout(() => {
          restart("😵‍💫 GAME OVER 😵‍💫");
        }, 500);
    }
  }
  // check for win
  if (flippedCards.length === 18) {
    restart("Yes! 🤘 You Rock!");
  }
}

//Restart game
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 12;
  playerLivesCount.textContent = playerLives;
  // win/lose text
  // create message div
  setTimeout(() => {
    const messageDiv = document.createElement("div");
    messageDiv.setAttribute("id", "message");
    messageDiv.textContent = text;

    // create play again button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.addEventListener("click", () => {
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
};

cardGenerator();
