//dependcies
//installed ussing npm eg npm install express,nodemon
//const express should always be number one (const express)

//instantiations
//app variabe =(const app =express)

const express = require('express'); //dependcies
const path= require('path');
const app = express(); //instantications
const port= 3000; //instantications

//importing routes
const Routers=require("./routes/Routers"); //importing routes from the studyroutes file
const Routers2=require("./routes/Routers2"); //importing routes from the studyroutes2 file

//configurations
app.set('view engine', 'pug');//setting the view engine to pug
//pug is a template engine that allows you to write HTML in a more concise way
app.set('views', path.join(__dirname, 'views'));

//middleware
//app.use = middleware
app.use((req,res,next) =>{
console.log('A new request  received at' + Date.now());
next();
});
//monitoring how many times a particular route/endpoint has been hit
//app.use('/contact', (req, res, next) => {
  //console.log('A new request  received at ' + Date.now());
  //next();
//}); 
///bodypaser
app.use(express.urlencoded({extended:false}));

//serving static files
app.use(express.static(path.join(__dirname,'public')));

// use imported routes
app.use('/study',Routers); //using the imported routes
app.use('/',Routers2); //using the imported routes

//app.use('/', studyRoutes); //using the imported routes

// non existent route
app.use((req, res) => {
  res.status(404).send('This route does not exist');
});


//404 error handling
//non-existent page
//app.get('*', (req, res) => { // new
//  res.status(404).send('Page not found. 404 error.');
//});



//this is always the last line in this file bootstreaping the server
app.listen(port, () => console.log(`listening on port ${port}`));
