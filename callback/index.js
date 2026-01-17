// const express = require("express");

// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("hello", { name: "Geeks" });
// });

// app.listen(port, () => {
//   console.log(`Server is Running on https//:${port}`);
// });

let express = require("express");
let app = express();
// const images = require("./images/pro.jpg");

app.set("view engine", "ejs");
app.use(express.static("public"));

// const profileImage=

app.get("/", (req, res) => {
  const hannsInfo = {
    name: "Fatima Noor",
    age: "23",
    profession: "Software Developer",
    skill: [" Node.js  |", " Express |", " MongoDB |", "\t EJS"],
    goal: "to be married  and  have  a family",
    img: "images",
    qoutes: "</ coder >",
  };
  res.render("hello", { hannsInfo });
});

let port = 6500;
app.listen(port, () => {
  console.log(`Server is running on http//localhost:${port}`);
});
