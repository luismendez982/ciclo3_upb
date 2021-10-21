const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('index.html',{title:'Safity'});
});
router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'Safity'});
});
router.get('/registro',(req,res)=>{
    res.render('registro.html',{title:'Safity'});
});

module.exports=router;