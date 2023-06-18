const express = require("express");
const app = express();
const port =8000;
const path = require("path")
const hbs = require('hbs')



//Static path
let staticPath= path.join(__dirname,"../public")
let templatepath= path.join(__dirname,"../templates/views")
let patialspath= path.join(__dirname,"../templates/partials")

// app.use(express.static(templatepath))
app.set("view engine", "hbs")
app.set('views', templatepath )

hbs.registerPartials(patialspath)
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: "Oops! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`Listing on http://127.0.0.1:${port}`)
})