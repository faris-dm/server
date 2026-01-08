const express = require("express");

const app = express();
app.use(express.json());

const MenusList = {
  horror: [
    {
      id: 1,
      title: "The Conjuring",
      description: "A community of horrors",
      duration: "2h:42m:2s",
    },
    {
      id: 2,
      title: "Seen Light",
      description: "monstor Land",
      duration: "2h 3s",
    },
    {
      id: 3,
      title: "IT",
      description: "Tech related Viresus",
      duration: "2h 3s",
    },
    {
      id: 4,
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
  Adventure: [
    {
      id: 1,
      title: "Inception",
      description: " finding your self",
      duration: "2h:30m:2s",
    },
    {
      id: 2,
      title: "dora",
      description: " finding your self",
      duration: "2h:30m:2s",
    },
  ],
  Love: [
    {
      id: 1,
      title: "The Man",
      description: " Mestroy and fantacy",
      duration: "2h:30m:2s",
    },
    {
      id: 2,
      title: "Male",
      description: "self Descovery",
      duration: "2h:30m:2s",
    },
  ],
};

const MenuMovies = ["horror", "Action", "Love", "Sci-Fi"];

app.get("/", (req, res) => {
  res.send({ message: "wellcome   to home pages" });
});

app.get("/movies", (req, res) => {
  res.send(MenuMovies);
});

// app.get("/movies/:genre", (req, res) => {
//   if (!MenusList[req.params.genre]) {
//     res.status(404).send("in correct search item");
//   } else {
//     const findHorrorTitle = MenusList[req.params.genre].map(
//       (item) => item.title
//     );

//     res.send({ catagories: findHorrorTitle });
//   }
// });

app.get("/movies/:genre", (req, res) => {
  if (!MenusList[req.params.genre]) {
    res.status(404).send(" there is no match");
  } else {
    const FindTitle = MenusList[req.params.genre].map((items) => items.title);

    res.send(FindTitle);
  }
});

app.post("/movies/:genre", (req, res) => {
  let search = MenusList[req.params.genre];
  if (search) {
    let addNewElemnt = {
      id: search.length + 1,
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
    };
    search.push(addNewElemnt);
    let succes = res.status(201).send;
    succes(MenusList);
    console.log(` succefully added`, addNewElemnt);
  } else {
    res.status(404).send(` there is no section with  name`);
  }
});

app.get("/movies/love", (req, res) => {
  res.send("title", MovieList.Love);
});

const port = 7600;

app.listen(port, () => {
  console.log(`https//:localhost:${port}`);
});
