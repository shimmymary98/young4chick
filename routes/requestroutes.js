const express=require('express');
const router=express.Router();
const requestfeeds=require('../model/requestfeedsmodel')
const requestchicks=require('../model/requestchicksmodel')
const addstock=require('../model/addstockmodel')

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

router.get('/addstock',(req,res)=>{
    res.render('addstock');
})

router.post('/addstock', async(req, res) => {
    try {
        console.log(req.body);
    const newaddstock = new addstock(req.body);
    await newaddstock.save();
    } catch (error) {
       console.error(error) 
       res.status(400).render('addstock')
    }
    
});



module.exports=router;

