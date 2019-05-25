const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({message:'Hello, Welcome to all users section'});
});

router.get('/:id',(req,res)=>{
    let id=req.params.id;
    res.json({message:`You just requested for ${id}`});
});

module.exports=router;