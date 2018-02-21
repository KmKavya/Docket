var {User}=require('./user');

var logout=(req,res)=> {
req.user.removeToken(req.token).then(()=> {
  res.status(200).send();
},()=> {
  res.status(400).send();
});
}

module.exports=logout;
