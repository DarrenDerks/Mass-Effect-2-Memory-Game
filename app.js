// Grab stuff
const section = document.querySelector("section");
const playerLivesCounter = document.querySelector("span");
let playerLives = 35;

//Link the text
playerLivesCounter.textContent = playerLives;

//Make data
const getData = () => [
  { imgSrc: "./images/Garrus.jpg", name: "Garrus" },
  { imgSrc: "./images/Grunt.jpg", name: "Grunt" },
  { imgSrc: "./images/Jack.jpg", name: "Jack" },
  { imgSrc: "./images/Legion.jpg", name: "Legion" },
  { imgSrc: "./images/Miranda.jpg", name: "Miranda" },
  { imgSrc: "./images/Mordin.jpg", name: "Mordin" },
  { imgSrc: "./images/Tali.jpg", name: "Tali" },
  { imgSrc: "./images/Thane.jpg", name: "Thane" },
  { imgSrc: "./images/Illusive_Man.jpg", name: "Illusive Man" },
  { imgSrc: "./images/Joker.jpg", name: "Joker" },
  { imgSrc: "./images/Kasumi.jpg", name: "Kasumi" },
  { imgSrc: "./images/Liara.jpg", name: "Liara" },
  { imgSrc: "./images/Jacob.jpg", name: "Jacob" },
  { imgSrc: "./images/Morinth.jpg", name: "Morinth" },
  { imgSrc: "./images/Samara.jpg", name: "Samara" },
  { imgSrc: "./images/Dr.Karin.jpg", name: "Dr. Karin" },
  { imgSrc: "./images/Garrus.jpg", name: "Garrus" },
  { imgSrc: "./images/Grunt.jpg", name: "Grunt" },
  { imgSrc: "./images/Jack.jpg", name: "Jack" },
  { imgSrc: "./images/Legion.jpg", name: "Legion" },
  { imgSrc: "./images/Miranda.jpg", name: "Miranda" },
  { imgSrc: "./images/Mordin.jpg", name: "Mordin" },
  { imgSrc: "./images/Tali.jpg", name: "Tali" },
  { imgSrc: "./images/Thane.jpg", name: "Thane" },
  { imgSrc: "./images/Illusive_Man.jpg", name: "Illusive Man" },
  { imgSrc: "./images/Joker.jpg", name: "Joker" },
  { imgSrc: "./images/Kasumi.jpg", name: "Kasumi" },
  { imgSrc: "./images/Liara.jpg", name: "Liara" },
  { imgSrc: "./images/Jacob.jpg", name: "Jacob" },
  { imgSrc: "./images/Morinth.jpg", name: "Morinth" },
  { imgSrc: "./images/Samara.jpg", name: "Samara" },
  { imgSrc: "./images/Dr.Karin.jpg", name: "Dr. Karin" },
];

//Shuffle the Cards
const shuffle = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Card Maker Function
const cardMaker = () => {
  const cardData = shuffle();
  //Make the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Combine info to cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Combine cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("flipCard");
      cardCheck(e);
    });
  });
};

//Card Check
const cardCheck = (e) => {
  console.log(e);
  const cardClick = e.target;
  cardClick.classList.add("flipped");
  const cardsFlipped = document.querySelectorAll(".flipped");
  const flipCard = document.querySelectorAll(".flipCard");
  //Logic
  if (cardsFlipped.length === 2) {
    if (
      cardsFlipped[0].getAttribute("name") ===
      cardsFlipped[1].getAttribute("name")
    ) {
      console.log("match");
      cardsFlipped.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      cardsFlipped.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("flipCard"), 1000);
      });
      playerLives--;
      playerLivesCounter.textContent = playerLives;
      if (playerLives === 0) {
        reset("The universe is lost Shepard!");
      }
    }
  }
  //Win the game check
  if (flipCard.length === 32) {
    reset("You saved the universe Shepard!");
  }
};

//Reset
const reset = (text) => {
  let cardData = shuffle();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("flipCard");
    //Shuffle
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 35;
  playerLivesCounter.textContent = playerLives;
  setTimeout(() => window.alert(text), 100);
};

cardMaker();
