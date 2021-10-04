const express= require('express');
const homeRouter = require('./routes/home.js');
const weatherRouter = require('./routes/about.js');
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT || 3000; // here, 

const app =express();

// Define path for express config
const publicdirPath = path.join(__dirname,'/public');
const viewsPath=path.join(__dirname,'/templates/views');
const partialsPath=path.join(__dirname,'/templates/partials');

// Setup for static directory to serve
app.use(express.static(publicdirPath));

// Setup for handlebzars and views location
app.set('view engine','hbs');
app.set('views',viewsPath); // this is not required if your templates folder name is views in the root directory, it will take view folder auto 
hbs.registerPartials(partialsPath);

app.use(homeRouter);
app.use(weatherRouter);

app.get('*',(req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(port);
