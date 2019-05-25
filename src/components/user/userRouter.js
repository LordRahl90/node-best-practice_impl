const express=require('express');
const router=express.Router();
const UserService=require('./userService');

router.get('/',async (req,res)=>{
    const response=await UserService.getUsers();
    res.status(200).json(response);
});

router.get('/:id',async (req,res)=>{
    let id=req.params.id;

    try{
        const response=await UserService.listOneUser(id);
        res.json(response);
    }
    catch(e){
        return res.status(400).json({
            error: e
        });
    }
});

module.exports=router;