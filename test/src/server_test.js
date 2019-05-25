
const request =require('supertest');
const app=require('../../app');

describe("Bundled Test",()=>{

    it('TestLandingPage',()=>{
        request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if(err) throw err;
            console.log(res.text);
        });
    });

});