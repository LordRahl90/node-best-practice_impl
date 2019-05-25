
const User=require('./user');           //USer Model

const UserService={

    async getUsers(){
        let users=await User.find({});
        return {
            message:'Users Loaded successfully',
            data: users
        };
    },
    async listOneUser(id){
        let user =await User.findOne({_id:id});
        if(user===null){
            throw "User not found";
        }
        return {
            message:`I found the user with ${id}`,
            data: user
        }
    },
    createUser(user){

    }
}

module.exports=UserService;