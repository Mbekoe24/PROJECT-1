// Axios calls will need to be formatted like this:
//=====================================
//=========== global variables ==========
//=====================================
Api for the game
  
Bulbasaur - "https://pokeapi.co/api/v2/pokemon-form/1/";

charmander - "https://pokeapi.co/api/v2/pokemon-form/4/";
squirtle - "https://pokeapi.co/api/v2/pokemon-form/7/";

Mewtwo - "https://pokeapi.co/api/v2/pokemon-form/150/";

blaziken - "https://pokeapi.co/api/v2/pokemon-form/257/";

rayquaza - "https://pokeapi.co/api/v2/pokemon-species/384/";



// const api_key = { "x-api-key": "143c3a90-4456-449c-8dca-928380947fe4" };
// const button = document.querySelector("#try-me");
// const select = document.querySelector("select");

// // =======================
// /// === Pokemon ======
// //========================
// const getCategories = async () => {
//   const resp = await axios.get(
//     "https://api.thecatapi.com/v1/categories",
//     api_key
//   );

//   resp.data.forEach(category => {
//     select.innerHTML += `
//   <option value = ${category.id}>${category.name}</option>
//     `;
//   });
// };
// getCategories();

// //=======================
// //== image get request
// //=======================

// //https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}

// button.addEventListener("click", async () => {
//   const resp = await axios.get(
//     `https://api.thecatapi.com/v1/images/search?category_ids=${select.value}`,
//     api_key
//   );
//   // debugger;
//   const catPicDiv = document.querySelector("#catpic");
//   catPicDiv.innerHTML = `
//   <img src=${resp.data[0].url} />`;
// });
