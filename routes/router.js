const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;

router.use(express.static('public'));
const cartoonRoutes=require('./api/cartoonRoutes')

router.use('/cartoons',cartoonRoutes);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'home',
        name:'cartoons'
    })
});


router.get('*',(req,res)=>{
    if(req.url='/favicon.ico'){
        res.end()
    }else{
        res.render('pages/404',{
            title:'404 Error - Page not found',
            name:'404 Error'
        })
    }
});

module.exports=router;