
const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    first_name: {type: String,index:true},
    last_name: {type: String,index:true},
    email: {type: String,trim:true,required:true,index:true,unique:true},
    phone:{type: String,index:true,required:true,unique:true}
},{strict: true});


UserSchema.pre('save',function(next){
    if(!this.isNew){
        next();
    }

    console.log("New user discovered, Should we mail him?");
    next();
});

module.exports=mongoose.model('User',UserSchema);