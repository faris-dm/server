// async function getApia() {
//   let url = "https://dummyjson.com/test";

const { response } = require("express");

//   try {
//     let response = await fetch(url);
//     if (!response.ok) {
//       throw Error(`response stattaus: ${response.status}`);
//     } else {
//       let result = await response.json();
//       console.log(result);
//     }
//   } catch (Error) {
//     console.log(error);
//   }
// }

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data.id))
//   .catch((Error) => console.error(Error));

async function Api() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      console.log("wrong url input");
    } else {
      let data = await response.json();
      console.log(data.name);
    }
  } catch (error) {
    console.log(error);
  }
}

Api();
