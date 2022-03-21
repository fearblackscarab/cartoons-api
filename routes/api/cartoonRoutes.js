const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));
const port=process.env.PORT || 3000;

router.get('/',(req,res)=>{
    const url='https://api.sampleapis.com/cartoons/cartoons2D';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/cartoons',{
            title:'Cartoons',
            name:'Cartoons',
            data
        })
    })
});

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/cartoons/cartoons2D/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/single-cartoon',{
            title:`${data.title}`,
            name:`${data.title}`,
            data
        })
    })
});

module.exports=router;