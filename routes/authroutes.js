const express = require('express')
const router = express.Router()
const signup = require('../model/signupmodel')

// login router
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {

})

// sign up router
router.get('/signup', (req, res) => {
    res.render('signup');
})


router.post('/signup', (req, res) => {
    console.log(req.body);
    const newsignup = new signup(req.body);
    newsignup.save();
})

module.exports = router
