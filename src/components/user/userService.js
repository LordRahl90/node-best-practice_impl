
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
            return {success:false,message:"User not found"};
        }
        return {
            success: true,
            message:`I found the user with ${id}`,
            data: user
        }
    },
    async createUser(user){
        try{
            let newUser=await User.create(user);

            return {
                message:'User Created Successfully',
                data: newUser
            }
        }
        catch(e){
            throw e;
        }
    }
}

module.exports=UserService;