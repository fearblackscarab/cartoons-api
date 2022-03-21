const express=require('express');
const server=express();
const port=process.env.PORT || 3000;

server.set('view engine','ejs')
server.use('/',require('./routes/router'));

server.listen(port,()=>{
    console.log(`at port:${port}`)
});