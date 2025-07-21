const express=require('express');
const router=express.Router();

router.get('/farmers',(req,res)=>{
    res.render('dashboardfarmer');
})

router.get('/customers',(req,res)=>{
    res.render('dashboardcustomer');
})

router.get('/agents',(req,res)=>{
    res.render('dashboardagents');
})

router.get('/manager',(req,res)=>{
    res.render('dashboardmanager');
})







// router.post('/addchicks',(req,res)=>{
//     const chickName = req.body.chickName;
//     const chickAge = req.body.chickAge;
//     const chickBreed = req.body.chickBreed;

//     // Here you would typically save the chick data to a database
//     // For this example, we'll just send a response back

//     res.send(`Chick added: Name - ${chickName}, Age - ${chickAge}, Breed - ${chickBreed}`);
// });

// router.post('/addchicks',(req,res)=>{
//     console.log(req.body);
//     // res.send('Chick added successfully');
// })

module.exports=router


