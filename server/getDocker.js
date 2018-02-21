var {User}=require('./user');
const _=require('lodash');
var {DockerUser}=require('./dockerSchema.js');


var getDocker=(req,res)=> {
var body=_.pick(req.body,['name','application','source','ip','level','fromDate',
          'toDate','createdBy','status','eventDateTime','details','keyDataAsJSON',
          'keywords']);
var dockeruser=new DockerUser(body);
dockeruser.save().then(()=> {
  res.send([dockeruser.name,dockeruser.application]);
}).catch((e)=> {
  res.status(400).send(e);
})
}

module.exports=getDocker;
