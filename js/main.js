// Axios calls will need to be formatted like this:
//=====================================
//=========== global variables ==========
//=====================================
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
  <div class="name">${response.data.name}</div>
  `;
  const pokeInfo = document.querySelector("#pokemon-img");
  pokeInfo.innerHTML = innerHTML;
};

pokeHTML();

// const pokeList = async () => {
//   const response = await axios.get(pokeUrl);
//   let currentIndex = pokeData[id[""]];
//   newIndex = [];
//   for (i = 0; i < currentIndex; i++) {
//     Math.floor(Math.random()) * currentIndex.parsInt() + 1;
//   }
//   console.log(newIndex);
//   // console.log(response.data);
// };

// pokeList();
