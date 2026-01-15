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

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("hello", { name: "solo" });
});

let port = 6500;
app.listen(port, () => {
  console.log(`Server is running on http//localhost:${port}`);
});
