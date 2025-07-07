const express=require('express');
const router= express.Router(); //creating a new router instance

router.get('/', (req, res) => { // new
  res.send('Homepage! Hello world this is the first page on the browser aka landing page.');
}); // get  and listen are node methods


module.exports = router; // exporting the router instance