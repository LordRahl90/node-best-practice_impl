const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const UserRouter=require('./src/components/user').UserRouter;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.json({message:'Hello to the whole wide world'});
});

app.use('/users',UserRouter);

module.exports=app;