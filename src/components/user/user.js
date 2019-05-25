
const mongoose=require('mongoose');
// const Schema=mongoose.Schema();

const UserSchema=mongoose.Schema({
    first_name: {type: String,index:true},
    last_name: {type: String,index:true},
    email: {type: String,trim:true,required:true,index:true},
    phone:{type: String,index:true,required:true}
});


UserSchema.pre('save',function(next){
    if(!this.isNew){
        next();
    }

    console.log("New user discovered, Should we mail him?");

});

module.exports=mongoose.model('User',UserSchema);