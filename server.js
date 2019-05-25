const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const UserRouter=require('./src/modules/user').UserRouter;

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.json({message:'Hello to the whole wide world'});
});

app.use('/users',UserRouter);

module.exports=app;