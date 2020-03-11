// // =======================
// /// === Pokemon ======
// //========================
const makeRandomPoke = () => {
  let randomNum = Math.floor(Math.random() * 807);
  const pokeData = {
    url: "https://pokeapi.co/api/v2/",
    type: "pokemon",
    id: randomNum
  };
  const { url, type, id } = pokeData;
  const pokeUrl = `${url}${type}/${id}`;
  return pokeUrl;
};
let pokeUrl = makeRandomPoke();
const pokeImg = document.querySelector("#pokemon");

// //=======================
// //== image/ name get request
// //=======================

const pokeHTML = async () => {
  const response = await axios.get(makeRandomPoke());
  const pokeInfo = document.querySelector("#pokemon img");
  pokeInfo.src = response.data.sprites.front_default;
  document.querySelector("#pokemon").classList.remove("pokeball");
  const pokeButton = document.querySelector(".answer1");
  pokeButton.innerText = response.data.name;
  pokeImg.classList.remove("reveal");
  const whosThat = document.querySelector("#whos-that");
  const imageDiv = document.querySelector("#image-div");
  const youWin = document.createElement("div");
  const youLose = document.createElement("div");
  const gamePlay = document.querySelector("#gameplay");
  /// Question Counter / Score
  if (score > 9) {
    whosThat.classList.add("hide-div");
    gamePlay.classList.add("hide-div");
    youWin.innerHTML = `<img src="https://fontmeme.com/permalink/200311/d2e844f6b46c41662ce217d0b9cac65a.png"/>`;
    imageDiv.appendChild(youWin);
    console.log("You win");
    // change markup to display the users score and an end game message.
  } else if (questionsAsked > 9 && score < 8) {
    whosThat.classList.add("hide-div");
    gamePlay.classList.add("hide-div");
    youLose.innerHTML = `<img src="https://fontmeme.com/permalink/200311/951aaed79f4e541865a5982786e17319.png"/>`;
    imageDiv.appendChild(youLose);
    console.log("You Lose");
  }
};
pokeHTML();
/// second instance of random name

const randomNames2 = async () => {
  const response = await axios.get(makeRandomPoke());
  const innerHTML = `${response.data.name}`;
  const random2 = document.querySelector(".answer2");
  random2.innerHTML = innerHTML;
};
randomNames2();

/// third instance of random name

const randomNames3 = async () => {
  const response = await axios.get(makeRandomPoke());
  const innerHTML = `${response.data.name}`;
  const random3 = document.querySelector(".answer3");
  random3.innerHTML = innerHTML;
};
randomNames3();

// Randomizing each button within the array/

const randomizeButton = () => {
  let buttonArr = document.querySelectorAll(".answer-button");
  const answerContainer = document.querySelector(".button-div");
  for (let i = buttonArr.length; i > 0; i -= 1) {
    answerContainer.appendChild(
      buttonArr[Math.floor(Math.random() * buttonArr.length)]
    );
  }
};

// randomizeButton();

// Logic for the correct answer === userInput

let clickPokemon = document.querySelectorAll(".answer-button");

const userInput = () => {
  for (let i = 0; i < clickPokemon.length; i++) {
    clickPokemon[i].addEventListener("click", e => {
      findAnswer(e);
      setTimeout(() => {
        pokeHTML();
        randomNames2();
        randomNames3();
        randomizeButton();
      }, 2000);
    });
  }
};

userInput();

const correctAns = document.querySelector(".answer1");
const scoreBoard = document.querySelector("#score-button");
let score = 0;
let questionsAsked = 0;

const findAnswer = e => {
  const answerValue = correctAns.innerHTML;
  questionsAsked += 1;
  console.log(questionsAsked);
  if (e.target.innerHTML === answerValue) {
    pokeImg.classList.add("reveal");
    scoreBoard.innerHTML = `${(score += 1)}`;
  } else {
    pokeImg.classList.remove("reveal");
  }
};
