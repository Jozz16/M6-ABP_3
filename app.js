//plantill abajo
const  express = require('express');
const app =express();
const puerto=3000;
const hbs = require("hbs");
const archivo = require("fs");
const path = "./file/paises.json";

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")


app.get("/paises",(req,res)=>{

//resultado = JSON.parse(archivo.readFileSync(path, {encoding:"utf-8"}));

res.render("index", {resultado: JSON.parse(archivo.readFileSync(path, {encoding:"utf-8"})) } )


})






// plantilla abajo
app.all("*",(req,res)=>{
    res.status(404).send("pagina no existe")
})
//plantilla abajo
app.listen(puerto,()=>{
    console.log("servicio levantado")
})