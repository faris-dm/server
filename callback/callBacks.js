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
const { DeleteIcon } = require("lucide-react");

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

// app.get("/product", (req, res) => {
//   res.send(product);
// });

app.get("/", (req, res) => {
  res.send({ Message: "Wellcome to land page" });
});
app.get("/product", (req, res) => {
  res.send(product);
});
app.get("/product/:id", (req, res) => {
  const idElement = product.find((item) => item.id === parseInt(req.params.id));

  res.send(idElement);
});
app.post("/product/new", (req, res) => {
  const newItems = {
    id: product.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  if (!newItems) {
    res.status(404).send("inccorect input");
  }
  product.push(newItems);
  res.send(product);
});

app.delete("/product/:id", (req, res) => {
  let dleteId = product.find((item) => item.id === parseInt(req.params.id));

  if (dleteId) {
    const ItemsIndex = product.indexOf(dleteId);
    product.splice(ItemsIndex, 1);
    res.send(product, "items deleted succesfull");
  } else {
    res.send(" there is no item does  match");
  }
});

// app.get("/product/:id", (req, res) => {
//   let smallItems = product.find((item) => item.id === parseInt(req.params.id));

//   res.send(smallItems);
// });

// app.post("/product", (req, res) => {
//   const addItems = {
//     id: product.length + 1,
//     name: req.body.name,
//     price: req.body.price,
//   };
//   product.push(addItems);
//   res.send(product);
// });

// //  update    the items
// app.put("/product/:id", (req, res) => {
//   const oldItems = product.find((item) => item.id === parseInt(req.params.id));

//   if (oldItems) {
//     (oldItems.name = req.body.name || oldItems.name),
//       (oldItems.price = body.price || oldItems.price);
//   } else {
//     res.status(404).send(" item does  not match");
//   }
// });

// app.delete("/product/:id", (req, res) => {
//   const NeededItem = product.find((item) => item.id === req.body.id);
//   if (NeededItem) {
//     let REmovedIndex = product.indexOf(NeededItem);
//     product.splice(REmovedIndex, 1);
//   }
//   res.status(404).send({ message: "item does not found" });
// });

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
