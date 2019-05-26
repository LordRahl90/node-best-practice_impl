
const Logger=(req,res,next)=>{
    console.log(req.method);
    next();
}


module.exports=Logger;