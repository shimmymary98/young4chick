const express=require('express');
const router=express.Router();

router.get('/aboutyoung4chicks',(req,res)=>{
    res.render('index');
})
module.exports=router;
