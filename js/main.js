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
  const pokeButton = document.querySelector(".answer1");
  pokeButton.innerText = response.data.name;
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

randomizeButton();

// Logic for the correct answer === userInput

let correctAns = document.querySelector(".answer1");
let clickPokemon = document.querySelectorAll(".answer-button");
let scoreBoard = document.querySelector("score-button");
let revealPic = (document.querySelector("#pokemon-img").style.brightness =
  "100%");
tempScore = scoreBoard;
let userScore = 0;
let tempScore;
for (let i = 0; i < clickPokemon.length; i++) {
  clickPokemon[i].addEventListener("click", () => {
    pokeHTML();
    randomNames2();
    randomNames3();
    randomizeButton();
    revealPic;
    tempScore = userScore.parsInt()++;
    if (clickPokemon[i] === correctAns) {
      userScore++;

      // alert(
      //   `You got it right, you gotten  ${userScore} question right so far!`
      // );
    } else {
      alert("Wrong answer!");
    }
    // setTimeout(() => {

    // }, 1000);
    // checkForWinner();
  });
}
// const findAnswer = () => {
//   const answerArr = document.querySelectorAll(".answer-button");
//   const correctAns = document.querySelector(".answer1");
//   let revealPic = (document.querySelector("#pokemon-img").style.property =
//     "brightness= 100%");
//   if (answerArr.length === correctAns) {
//     alert(`You got it! Well done. `);
//     revealPic;
//   } else {
//     alert("Sorry, that was incorrect");
//     revealPic;
//   }
//   findAnswer();

// const userInput = answerArr.addEventListner("click", event => {
//   console.log(event.target.value);
// });
// if (userInput === correctAns) {
//   userScore += 1;
//   revealPic;
//   alert(`You got it! You have ${userScore} now. `);
// } else if (userInput != correctAns) {
//   alert("Sorry, that was incorrect");
//   revealPic;
// }
// if (userScore === 8 && 10) {
//   alert(" You, Win! Go back to the Home Page and Try Again!");
//   revealPic;
// } else {
//   alert("You've lost the game, you're not a Pokemon Master.");
//   revealPic;
// }
// };
let checkForWinner = () => {
  let winner = document.querySelectorAll(".duck");
  if (winner.length === 1) {
    alert("You've won, there are no more ducks");
  }
};
