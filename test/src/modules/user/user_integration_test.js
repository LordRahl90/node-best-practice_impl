const request=require('supertest');
const expect=require('chai').expect;
const app=require('../../../../app');


describe("User Integration testing",()=>{

    it('Loads User Landing Record',()=>{
        request(app)
        .get('/users')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err,res)=>{
            if(err) throw err;
            console.log(res.text);
        });
    });


    it('Loads Specific user page',()=>{
        request(app)
        .get('/users/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err,res)=>{
            if(err) throw err;
            console.log(res.text);
        });
    });

});