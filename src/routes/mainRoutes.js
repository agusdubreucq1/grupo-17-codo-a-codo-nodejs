const express = require("express")
const router = express.router

router.get('/home', (req, res)=>{
    res.send("home")
})
router.get('/contact', (req, res)=>{
    res.send("contact")
})
router.get('/about', (req, res)=>{
    res.send("about")
})
router.get('/faqs', (req, res)=>{
    res.send("faqs")
})

modules.exports = router