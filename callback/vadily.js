const express = require("express");
const { Search, ListMinus } = require("lucide-react");

// https://jossymesfin.vercel.app/
// https://t.me/josephteka

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

app.get("/movies/:genre", (req, res) => {
  let searchUser = MenusList[req.params.genre];

  if (!searchUser) {
    res.status(404).send("Search Does not Match");
    console.log("request Rejected");
  } else {
    let Wanted = MenusList[req.params.genre].map((item) => item.title);
    res.status(201).send(Wanted);
    console.log("request Done Succefully", Wanted);
  }
});

// app.post("/movies/:genre", (req, res) => {
//   let search = MenusList[req.params.genre];
//   if (search) {
//     let addNewElemnt = {
//       id: search.length + 1,
//       title: req.body.title,
//       description: req.body.description,
//       duration: req.body.duration,
//     };
//     search.push(addNewElemnt);
//     res.status(201).send(MenusList);
//     console.log(` succefully added`, addNewElemnt);
//   } else {
//     res.status(404).send(` there is no section with  name`);
//     console.log(` request rejected`);
//   }
// });

// update elements

// app.put("/movies/:genre/:id", (req, res) => {
//   let inputSearch = MenusList[req.params.genre];
//   if (inputSearch) {
//     let oldItem = inputSearch.find(
//       (item) => item.id === parseInt(req.params.id)
//     );
//     if (oldItem) {
//       (oldItem.title = req.body.title || oldItem.title),
//         (oldItem.description = req.body.description || oldItem.description),
//         (oldItem.duration = req.body.duration || oldItem.duration);
//       res.status(201).send(MenusList[req.params.genre]);
//       console.log("working succesfully");
//     } else {
//       res.status(404).send("items does not match,try again");
//     }
//   } else {
//     res.status(404).send("  item  with this title does catagores");
//   }
// });

app.put("/movies/:genre/:id", (req, res) => {
  let Search = MenusList[req.params.genre];
  if (Search) {
    let itemNeed = Search.find((item) => item.id === parseInt(req.params.id));
    if (itemNeed) {
      (itemNeed.title = req.body.title || itemNeed.title),
        (itemNeed.description = req.body.description || itemNeed.description),
        (itemNeed.duration = req.body.duration || itemNeed.duration);
      res.status(201).send(Search);

      console.log(itemNeed);
      console.log("updated  the item succefully");
      setTimeout(() => {
        console.log(itemNeed);
      }, 100);
    } else {
      res.status(404).send("item does not exist");
    }
  } else {
    res.status(404).send("search Does not match");
  }
});

app.get("/movies/love", (req, res) => {
  res.send(" MovieList.Love");
});

const port = 7600;

app.listen(port, () => {
  console.log(`https//:localhost:${port}`);
});
