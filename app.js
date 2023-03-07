//plantill abajo
const  express = require('express');
const app =express();
const puerto=3000;
const hbs = require("hbs");
//  plantilla abajo

app.set("view engine", "hbs")




// plantilla abajo
app.all("*",(req,res)=>{
    res.status(404).send("pagina no existe")
})
//plantilla abajo
app.listen(puerto,()=>{
    console.log("servicio levantado")
})