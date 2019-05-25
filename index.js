
const http=require('http');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todoapi',{useNewUrlParser:true});
const app=require('./app');



app.set('port',3500);
const server=http.createServer(app);

server.listen(3500,()=>{
    console.log("Hello World");
});