// Axios calls will need to be formatted like this:
//=====================================
//=========== global variables ==========
//=====================================

const pokeData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "54"
};

const { url, type, id } = pokeData;
const pokeUrl = `${url}${type}/${id}`;

// console.log(pokeUrl);
// // =======================
// /// === Pokemon ======
// //========================
//
const pokeImg = document.querySelector("#pokemon-img");

const getPokemon = async () => {
  const response = await axios.get(pokeUrl);
  // console.log(response.data.id);
};

getPokemon();

// //=======================
// //== image get request
// //=======================

//
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

const pokeList = async () => {
  const response = await axios.get(pokeUrl);
  let currentIndex = pokeData[id['']];
  newIndex = [];
  for (i = 0; i < currentIndex; i++) {
    Math.floor(Math.random()) * currentIndex.parsInt().toString + 1;
  }
  console.log(newIndex);
  // console.log(response.data);
};

pokeList();

// buildQuestion = () => {};

// let pokemonArr = pokeData(id);

// const pokemonRandomizer = pokemonArr => {
//   for (let i = 0; i < pokemonArr[id].length; i++) {
//     Math.floor(Math.random()) * pokemonArr.length;
//   }
//   return pokemonArr;
// };
// pokemonRandomizer();

// for (let i = 0; i < response.data.id.length; i++) {
//   Math.floor(Math.random()) * response.data.id.length;
// }
