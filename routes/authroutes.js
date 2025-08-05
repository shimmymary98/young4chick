const express = require('express');
const router = express.Router();
const signupModel = require('../model/signupmodel');
const passport = require('passport'); // Add this line

// login router
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    req.session.user=req.user;
    if (req.user.role== 'farmer') {
        res.redirect('/farmers')
    } else if (req.user.role=='customer') {
        res.redirect('/customers')
    }else if(req.user.role=='sales rep'){
        res.redirect('/agents')
    }else if(req,user.role=='manager'){
        res.redirect('/manager')
    }else{
        res.send("you don't have a role in the system")
    }
});

//logout route
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy((error)=>{
            if (error) {
                return res.status(500).send('error logging out')
            }
            res.redirect('/')
        })
    } 
});

// sign up router
router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body);
        const signup=new signupModel(req.body);
        let existingsignup = await signupModel.findOne({ email:req.body.email_address });
        if (existingsignup) {
            return res.status(400).send('This email already exists');
        } else {
            await signupModel.register(signup,req.body.password,(err)=>{
             if (err) {
                throw err;
             }
             res.redirect('/login')
            });
        }
    } catch (error) {
        console.error(error);
        res.status(400).render('signup', { error: error.message });
    }
});

module.exports = router;
