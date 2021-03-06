var {User}=require('./user');
const _=require('lodash');


var register=(req,res)=> {
var body=_.pick(req.body,['email','password']);
var user=new User(body);
user.save().then(()=> {
 return user.generateAuthToken()
}).then((token)=> {
  res.header('x-auth',token).send(user);
}).catch((e)=> {
  res.status(400).send(e);
});
}

module.exports=register;
