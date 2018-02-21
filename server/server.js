const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const _=require('lodash');
const express=require('express');
var app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
var {User}=require('./user');
const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');

var {authenticate}=require('./middleware/authenticate');
var {loginauth}=require('./middleware/loginauth');
var register=require('./register');
var login=require('./login');
var logout=require('./logout');
var getDocker=require('./getDocker');

mongoose.connect('mongodb://localhost:27017/Users',(err,db)=> {
  if(err){
    console.log('Failed to connect');
  }
  console.log('connected to mongodb');
});

app.post('/register',(req,res)=> {
  register(req,res);
});

app.post('/login', (req,res) => {
  login(req,res);
});

app.get('/',(req,res)=> {
  res.sendFile(__dirname+'/login.html');
});

// app.get('/login',(req,res)=> {
//   login(req,res);
// });

app.post('/getDocker',loginauth,(req,res)=> {
  getDocker(req,res);
});

app.delete('/logout',authenticate,(req,res)=> {
  logout(req,res);
});

app.listen('3000',()=> {
  console.log('server is up on port 3000');
});
