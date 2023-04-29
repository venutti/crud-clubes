const fs = require("fs");
const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "./uploads/imagenes" });
const exphbs = require("express-handlebars");

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/uploads`));

app.get("/", (req, res) => {
  res.render("home", { layout: "index" });
});

app.listen(PUERTO);
console.log(`Servidor escuchando en el puerto ${PUERTO}`);
