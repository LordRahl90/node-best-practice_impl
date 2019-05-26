const request=require('supertest');
const expect=require('chai').expect;
const mongoose=require('mongoose');

const app=require('../../../../app');


before(async function(done){
    mongoose.connect('mongodb://localhost/todo_api_test');
    console.log("Before text");
    done();
});

after(async function(done){
    console.log("Test completed");
    // mongoose.
    mongoose.connection.close();
    done();
});


describe("Create User Account",()=>{

    it("Just a Shadow test",function(){
        expect(2+2).to.be.equal(4);
    });

    it("Creates a new user",function(done){
        let payload={
            first_name:'Alugbin',
            last_name:'Abiodun',
            email:'alugbin.abiodun@gmail.com',
            phone:'07033304280',
        }

        request(app)
        .post('/api/v1/users')
        .send(payload)
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err){
                console.log(err);
            };
            let user=JSON.parse(res.text);
            console.log(user.message);
            done();
        });
    });
});


describe("Fetching Records Endpoint",()=>{

    it('Loads User Landing Record', function(){
        request(app)
        .get('/api/v1/users')
        .expect('Content-Type',/json/)
        .expect(200)
        .end(function(err,res){
            if(err){
                console.log(err);
            };
            // console.log(res.text);
        });
    });

    it('Loads Specific user page',()=>{
        request(app)
        .get('/api/v1/users/5ceae439b7ed9b21f71e19d4')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err,res)=>{
            if(err) throw err;
            console.log(res.text);
        });
    });

    it('Loads Unavailable user',()=>{
        request(app)
        .get('/api/v1/users/5ceae439b7ed9b21f71e19d3')
        .expect(400)
        .expect('Content-Type', /json/)
        .end((err,res)=>{
            if(err) throw err;
            console.log(res.text);
        });
    });
});
