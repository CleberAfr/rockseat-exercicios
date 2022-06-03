const express = require('express'); 
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Amorzinho<3"
        },
        {
            title: "I",
            message: "Instal ejs"
        },
        {
            title: "S",
            message: "Simtaxe simples"
        }
    ];
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function(req, res) {
    res.render("pages/about")
})

app.listen(8080);

console.log("Rodando");