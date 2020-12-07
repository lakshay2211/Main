const express=require('express');
const app=express();
const port=8000;
app.listen(port,function(err){
    if(err){
        console.log(`server is not running: ${err}`);
    }
    console.log(`server is running: ${port}`);
})