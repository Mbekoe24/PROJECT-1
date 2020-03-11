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
const pokeImg = document.querySelector("#pokemon-img");

// //=======================
// //== image/ name get request
// //=======================

const pokeHTML = async () => {
  const response = await axios.get(makeRandomPoke());
  const pokeInfo = document.querySelector("#pokemon-img img");
  pokeInfo.src = response.data.sprites.front_default;
  document.querySelector("#pokemon-img").classList.remove("pokeball");
  const pokeButton = document.querySelector(".answer1");
  pokeButton.innerText = response.data.name;
  pokeImg.classList.remove("reveal");
  const youLose = document.querySelector(".you-lose");
  const gamePlay = document.querySelector("#gameplay");

  if (questionsAsked > 9) {
    gamePlay.classList.add("hide-div");
  } else if (score > 8) {
    console.log("You win");
    // change markup to display the users score and an end game message.
  } else if (score > 8) {
    youLose.innerHTML = `<img src="https://fontmeme.com/permalink/200311/fb62d2f4c2a974bf3d2c55acc8ba143d.png"/>`;
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
      }, 3000);
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
  if (e.target.innerHTML === answerValue) {
    pokeImg.classList.add("reveal");
    scoreBoard.innerHTML = `${(score += 1)}`;
  } else {
    pokeImg.classList.remove("reveal");
  }
};
