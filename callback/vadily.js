const express = require("express");

const app = express();
// const listMovies = [
//   {
//     catagores: "Horor",
//     Movies: ["The Conjuring", "IT", "A Quiet Place", "Hereditary", "Scream"],
//   },
//   {
//     catagores: "Love",
//     Movies: [
//       "The Notebook",
//       "About Time",
//       "La La Land",
//       "Titanic",
//       "Before Sunrise",
//     ],
//   },
//   {
//     catagores: "Action",
//     Movies: [
//       "John Wick",
//       "Mad Max",
//       "The Dark Knight",
//       "Die Hard",
//       "Gladiator",
//     ],
//   },
//   {
//     category: "Sci-Fi",
//     movies: ["Inception", "Interstellar", "The Matrix", "Dune", "Arrival"],
//   },
// ];
const MovieList = {
  type: ["horror", "Action", "Love", "Sci-Fi"],
  horror: ["The Conjuring", "IT", "A Quiet Place", "Hereditary", "Scream"],
  Action: ["john Wick", "Mad Max", "The Dark Night"],
  Love: [
    "The Notebook",
    "About Time",
    "La La Land",
    "Titanic",
    "Before Sunrise",
  ],
  "Sci-Fi": ["Inception", "Interstellar", "The Matrix", "Dune", "Arrival"],
};

app.get("/", (req, res) => {
  res.send({ message: "wellcome   to home pages" });
});

app.get("/movies", (req, res) => {
  res.send(MovieList.type);
});

const port = 7600;

app.listen(port, () => {
  console.log(`https//:localhost:${port}`);
});
