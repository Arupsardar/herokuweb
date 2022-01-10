const express =require('express');
const app = express();
const port =8000;
const path =require('path');
const hbs = require('hbs');

// //build in middleware
// app.use(express.static('.'));
// const tamplatesPath =path.join(__dirname,"../templates");
// //app.use(express.static(path.join(__dirname,"../public")));
// //const staticPath =path.join(__dirname,"../public");
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


app.set('view engine',"hbs");
app.set("views",templatePath);

hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get("/",(req, res)=>{
    res.render("index",);
});
//for catagory page..
app.get("/catagory",(req, res)=>{
    res.render("catagory",)
});
//for about page
app.get("/about",(req, res)=>{
    res.render("about",)
});
 //for contact us page
 app.get("/contact",(req, res)=>{
     res.render("contact",);
 });
//for 404 error
app.get("*",(req,res)=>{
    res.render("404",{
        errorComment:'oop! page not found',
    });
 });

app.listen(port ,"",()=>{
    console.log(`listening the port number is ${port}`);
});