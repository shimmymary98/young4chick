const express=require('express');
const router= express.Router(); //creating a new router instance

//routing - creating routes
// the home page is the first router and it doesn't need the / just the server name is enough
// structre of a route app.METHOD(PATH,HANDLER);
// router.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world this is the first page on the browser aka landing page.');
// }); // get  and listen are node methods

//about routing /about takes you to about page.
router.get('/about', (req, res) => { // new
  res.send('About page. Nice!!');//get request brings you responses from different servers.works only in the brower
});

router.get('/contact', (req, res) => { 
  res.send('this is our contact page!!');
});


router.post('/contact', (req, res) => { // new
  res.send('Contact page. Nice!! You can reach us at this number: 123-456-7890');
});
//contact routing /contact takes you to contact page.

router.post('/postabout', (req, res)=> {
res.send('Got a POST request')
})

router.put('/user', (req, res)=> {
  res.send('Got a PUT request at /user');
});

router.delete('/user', (req, res)=> {
res.send('Got a DELETE request at /user')
})
///path parameters in node js
router.get('/profile/:username',  (req,res)=>{
  res.send('This is a path parameter '+ req.params.username)
  //get profile from database using username.
})

router.get('/queryparams',  (req,res)=>{
  res.send('My query params are'+ req.query.name + req.query.size + req.query.breed )
  //get profile from database using username.
})

//serving html files

const path = require('path');

router.get('/aboutyoung4chicks', (req, res) => { 
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/signup', (req, res) => { 
  res.sendFile(path.join(__dirname, '../views/signup.html'));
});

router.get('/chicks', (req, res) => { 
  res.sendFile(path.join(__dirname, '../views/chicks.html'));
});

router.get('/agent', (req, res) => { 
  res.sendFile(path.join(__dirname, '../views/agent.html'));
});
router.put ('/contact', (req, res) => { // new
  res.send('Contact page updated. Nice.');
});

router.delete('/contact', (req, res) => { // new
  res.send('Contact page deleted. Nice.');

});

module.exports=router; //exporting the router so that it can be used in other files
// this is the end of the routing file

