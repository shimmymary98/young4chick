const express=require('express');
const router=express.Router();
const signupModel = require('../model/signupmodel');


// get list of users in the database
router.get('/userlist',async(req,res)=>{
    try {
        let users = await signupModel.find().sort({$natural:-1}).limit(5)
        // let farmers=await signupModel.find({role:'farmer'}).sort()
        res.render('userlist', {users})
    } catch (error) {
        res.status(400).send('no users to render from the database')
    }
})
router.get('/recent-farmers', async (req, res) => {
    try {
        // Assuming 'role' field distinguishes farmers
        const recentFarmers = await signupModel.find({ role: 'farmer' }).sort({ createdAt: -1 }).limit(10);
        res.render('dashboardmanager', { recentFarmers });
    } catch (error) {
        res.status(400).send('Unable to fetch recent farmers');
    }
});









module.exports=router;


