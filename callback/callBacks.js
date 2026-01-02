// function cal(name, calbacks) {
//   console.log("my name is", name);
//   calbacks();
// }

// function need() {
//   console.log(" secons function");
// }

// setTimeout(() => {
//   cal("faris", need);
// }, 13000);

//  we use  asyn and awitlet

// import express from "express";
const express = require("express");

const app = express();
app.use(express.json());

const product = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Airpod", price: 2000 },
  { id: 4, name: "Watch", price: 400 },
  { id: 5, name: "keyboard", price: 7000 },
  { id: 6, name: "jeet", price: 500 },
];

app.get("/product", (req, res) => {
  res.send(product);
});

app.get("/product/:id", (req, res) => {
  let smallItems = product.find((item) => item.id === parseInt(req.params.id));

  res.send(smallItems);
});

app.post("/product", (req, res) => {
  const addItems = {
    id: product.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  product.push(addItems);
  res.send(product);
});

//  update    the items
app.put("/product/:id", (req, res) => {
  const oldItems = product.find((item) => item.id === parseInt(req.body.id));

  if (!oldItems) {
    res.status(404).send("item does not exist");
  } else {
    (oldItems.name = req.body.name || oldItems.name),
      (oldItems.price = req.body.price || oldItems.price);
  }
});

app.listen(5000, () => {
  console.log(`https://localhost:5000`);
});
