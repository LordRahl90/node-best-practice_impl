
const expect=require('chai').expect;
const mongoose=require('mongoose');

const UserService=require('../../../../src/components/user').UserService;



describe("Listing User Service ",()=>{

    it('Gets Here', ()=>{
        expect(2+2).to.equal(4);
    });


    it('Loads Existing Users',async ()=>{
        let response=await UserService.getUsers();
        expect(response.message).to.be.equals('Users Loaded successfully');
    });

});