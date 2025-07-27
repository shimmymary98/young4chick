const express=require('express');
const router=express.Router();

router.get('/farmers',(req,res)=>{
    res.render('dashboardfarmer');
})

router.get('/customers',(req,res)=>{
    res.render('dashboardcustomer');
})

router.get('/agents',(req,res)=>{
    res.render('dashboardagent');
})

router.get('/manager',(req,res)=>{
    res.render('dashboardmanager');
})

module.exports=router


