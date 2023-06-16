// grab a couple of elements
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 7;

// link text
playerLivesCount.textContent = playerLives;

// generate the data
const getData = () => [
  { imgSrc: "../images/bboys.jpeg", name: "bboys" },
  { imgSrc: "../images/bjork.jpeg", name: "bjork" },
  { imgSrc: "../images/cure.jpeg", name: "cure" },
  { imgSrc: "../images/doors.jpeg", name: "doors" },
  { imgSrc: "../images/floyd.jpeg", name: "floyd" },
  { imgSrc: "../images/marley.jpeg", name: "marley" },
  { imgSrc: "../images/tribe.jpeg", name: "tribe" },
  { imgSrc: "../images/u2.jpeg", name: "u2" },
  { imgSrc: "../images/bboys.jpeg", name: "bboys" },
  { imgSrc: "../images/bjork.jpeg", name: "bjork" },
  { imgSrc: "../images/cure.jpeg", name: "cure" },
  { imgSrc: "../images/doors.jpeg", name: "doors" },
  { imgSrc: "../images/floyd.jpeg", name: "floyd" },
  { imgSrc: "../images/marley.jpeg", name: "marley" },
  { imgSrc: "../images/tribe.jpeg", name: "tribe" },
  { imgSrc: "../images/u2.jpeg", name: "u2" },
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
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // attach the info to the cards
    face.src = item.imgSrc;
    back.src = "../images/vinyl.jpeg";
    // attach the info to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    // make the cards flip
    card.addEventListener("click", (e) => {
        face.classList.toggle("toggleCard");
        card.classList.toggle("toggleCard");
        });
  });
};

cardGenerator();
