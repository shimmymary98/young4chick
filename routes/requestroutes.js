const express=require('express');
const router=express.Router();
const requestfeeds=require('../model/requestfeedsmodel')
const requestchicks=require('../model/requestchicksmodel')

router.get('/requestchicks',(req,res)=>{
    res.render('requestchicks');
})

router.post('/requestchicks', async (req, res) => {
    try {
        console.log(req.body);
    const newrequestchicks = new requestchicks(req.body);
    await newrequestchicks.save();
    } catch (error) {
       console.error(error) 
       res.status(400).render('requestchicks')
    }
    
});

router.get('/requestfeeds',(req,res)=>{
    res.render('requestfeeds');
})

router.post('/requestfeeds', async (req, res) => {
    try {
        console.log(req.body);
    const newrequestfeeds = new requestfeeds(req.body);
    await newrequestfeeds.save();
    } catch (error) {
       console.error(error) 
       res.status(400).render('requestfeeds')
    }
    
});





module.exports=router;

