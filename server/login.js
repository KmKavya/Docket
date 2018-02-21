var {User}=require('./user');
const _=require('lodash');

var login=(req,res)=> {
var body=_.pick(req.body,['email','password']);
User.findByCredentials(body.email,body.password).then((user)=> {
return user.generateAuthToken().then((token)=> {
res.header('x-auth',token).send(user);
});
}).catch((e)=> {
  res.status(400).send();
});
}

module.exports=login;
