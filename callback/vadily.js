const express = require("express");

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
  action: [
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
  adventure: [
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
  love: [
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

//get elements by id

// send elements

const MenuMovies = ["horror", "Action", "Love", "Sci-Fi"];

app.get("/", (req, res) => {
  res.send({ message: "wellcome   to home pages" });
});

app.get("/movies", (req, res) => {
  res.send(MenuMovies);
});

//send elements

app.post("/movies/:genre", (req, res) => {
  let search = MenusList[req.params.genre];
  if (!search) {
    res.status(404).send("caatagore does not exist");
    console.log("wrong search");
  } else {
    let AddedItrm = {
      id: search.length + 1,
      title: req.body.title,
      description: req.body.title,
      duration: req.body.duration,
    };
    search.push(AddedItrm);
    res.status(404).send(AddedItrm);
    console.log("added succefully", search);
  }
});

// update elements

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

// delet elements
app.delete("/movies/:genre/:id", (req, res) => {
  let IsCorrect = MenusList[req.params.genre];

  if (IsCorrect) {
    let ID_Elements = IsCorrect.find(
      (item) => item.id === parseInt(req.params.id)
    );
    if (ID_Elements) {
      let Deleted = IsCorrect.indexOf(ID_Elements);
      IsCorrect.splice(Deleted, 1);
      res.status(201).send(IsCorrect);
      console.log(
        " deleted array is :",
        ID_Elements,

        " the remaing elements are :",
        IsCorrect
      );
    } else {
      res.status(404).send(" there is no item with  that id");
      console.log("in correct id ");
    }
  } else {
    res.status(404).send("Wrong search/ does't match");
    console.log("correct your search");
  }
});

//  delete abn eb=ntire array

// app.delete("/movies/:genre", (req, res) => {
//   let UserPut = MenusList[req.params.genre];
//   if (!UserPut) {
//     res.status(404).send("wrong catagores");
//     console.log("error search");
//   } else {
//     let pathObject = MenusList[req.params.genre].find(
//       (item) => item.title === req.params.title
//     );
//     if (pathObject) {
//       let found = MenusList.indexOf(pathObject);
//       MenusList.findIndex(found, 1);
//       res.status(201).send(MenusList);
//       console.log("deleted catagore succefully");
//     } else {
//       res.status(404).send(" object does not much");
//     }
//   }
// });

// app.delete("/movies/:genre", (req, res) => {
//   let userInput = MenusList[req.params.genre];

//   if (!userInput) {
//     res.status(404).send("item does not have a match");
//   } else {
//     const CatagoresDelete = userInput.find(
//       (item) => item.title === req.params.title
//     );
//     let IndeDeled = MenusList.findIndex(CatagoresDelete);

//     userInput.splice(IndeDeled, 1);
//     res.status(201).send(MenusList);
//     console.log("we deleted", indexedDB);
//   }
// });
app.delete("/movies/:genre", (req, res) => {
  let searchUser = MenusList[req.params.genre];
  if (!searchUser) {
    res.status(404).send("Input has no match in the ");
  } else {
    delete MenusList[req.params.genre];
    res.status(200).send(MenusList);
    console.log("deleted succfully", MenusList);
  }
});

const port = 7600;

app.listen(port, () => {
  console.log(`https//:localhost:${port}`);
});
