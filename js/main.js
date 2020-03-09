// Axios calls will need to be formatted like this:
//=====================================
//=========== global variables ==========
//=====================================
// document.querySelector("#click-here").addEventListener("click", url("poke.html"))

let randomNum = Math.floor(Math.random() * 807);
// console.log(randomNum);
const pokeData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: randomNum
};
const { url, type, id } = pokeData;
const pokeUrl = `${url}${type}/${id}`;
const pokeImg = document.querySelector("#pokemon-img");
// console.log(pokeUrl);
// // =======================
// /// === Pokemon ======
// //========================

const getPokemon = async () => {
  const response = await axios.get(pokeUrl);
  // console.log(response.data.id);
};
getPokemon();

// //=======================
// //== image/ name get request
// //=======================

const pokeHTML = async () => {
  const response = await axios.get(pokeUrl);
  const innerHTML = `
  <img src= ${response.data.sprites.front_default}>
  `;
  const innerHTML2 = `
  <div class="answer1">${response.data.name}</div>
  `;
  const pokeInfo = document.querySelector("#pokemon-img");
  pokeInfo.innerHTML = innerHTML;
  const pokeButton = document.querySelector("button");
  pokeButton.innerHTML = innerHTML2;
};

pokeHTML();
/// second instance of random name
let randomNum2 = Math.floor(Math.random() * 807);
const pokeData2 = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: randomNum2
};
const pokeUrl2 = `${pokeData2.url}${pokeData2.type}/${pokeData2.id}`;

const randomNames2 = async () => {
  const response = await axios.get(pokeUrl2);
  const innerHTML = `${response.data.name}`;
  const random2 = document.querySelector(".answer2");
  random2.innerHTML = innerHTML;
};
randomNames2();

/// third instance of random name
let randomNum3 = Math.floor(Math.random() * 807);
const pokeData3 = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: randomNum3
};
const pokeUrl3 = `${pokeData3.url}${pokeData3.type}/${pokeData3.id}`;

const randomNames3 = async () => {
  const response = await axios.get(pokeUrl3);
  const innerHTML = `${response.data.name}`;
  const random3 = document.querySelector(".answer3");
  random3.innerHTML = innerHTML;
};
randomNames3();

