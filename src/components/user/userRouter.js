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
        const userResponse=await UserService.listOneUser(id);
        if(!userResponse.success){
            res.status(400).json(userResponse)
            return;
        }
        res.json(userResponse);
    }
    catch(e){
        return res.status(500).json({
            error: e
        });
    }
});


router.post('/',async (req,res)=>{
    let user=req.body;
    try{
        let newUser=await UserService.createUser(user);
        res.json({message:'New User Created successfully',data:newUser});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
    
});

module.exports=router;