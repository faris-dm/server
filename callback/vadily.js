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
// const MovieList = {
//   horror: ["The Conjuring", "IT", "A Quiet Place", "Hereditary", "Scream"],
//   Action: ["john Wick", "Mad Max", "The Dark Night"],
//   Love: [
//     "The Notebook",
//     "About Time",
//     "La La Land",
//     "Titanic",
//     "Before Sunrise",
//   ],
//   "Sci-Fi": ["Inception", "Interstellar", "The Matrix", "Dune", "Arrival"],
// };
const listMovies = [
  {
    horror: [
      {
        id: 1,
        title: "The Conjuring",
        description: "A community of horrors",
        duration: "2h:42m:2s",
      },
      {
        id: 2,
        title: "IT",
        description: "Tech related Viresus",
        duration: "2h 3s",
      },
      {
        id: 3,
        title: "A Quiet Place",
        description: "Old community tring to servive with  witchs",
        duration: "3h:30m",
      },
    ],
    Action: [
      {
        id: 1,
        title: "The Notebook",
        description: "Intilgeance campany to find the note books",
        duration: "2h:43s",
      },
      {
        id: 2,
        title: "Mad Max",
        description: "Man to mant to be  Rich",
        duration: "1h:43s",
      },
    ],
    Adventure: {
      id: 1,
      title: "Inception",
      description: " finding your self",
      duration: "2h:30m:2s",
    },
  },
];
const MenuMovies = ["horror", "Action", "Love", "Sci-Fi"];

app.get("/", (req, res) => {
  res.send({ message: "wellcome   to home pages" });
});

app.get("/movies", (req, res) => {
  res.send(MenuMovies);
});
app.get("/movies/Adventure", (req, res) => {
  res.send(MovieList["Sci-Fi"]);
});

app.get("/movies/action", (req, res) => {
  res.send(MovieList.Action);
});
app.get("/movies/:id", (req, res) => {
  const IdMovie = MenuMovies.find((item) => item.id == parseInt(req.params.id));
  if (!IdMovie) {
    res.send({ Message: "Movie with  that id does not exist" });
  } else {
    res.send(MovieList);
  }
});

app.get("/movies/horror", (req, res) => {
  res.send(MovieList.horror);
});

app.get("/movies/love", (req, res) => {
  res.send(MovieList.Love);
});

const port = 7600;

app.listen(port, () => {
  console.log(`https//:localhost:${port}`);
});
