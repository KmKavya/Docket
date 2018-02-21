var mongoose=require('mongoose');
var DockerSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  application: {
    type:String
  },
  source: {
    type:String
  },
  ip: {
    type:String
  },
  level: {
    type:String
  },
  fromDate: {
    type:String
  },
  toDate: {
    type:String
  },
  createdBy: {
    type:String
  },
  status: {
    type:String
  },
  eventDateTime: {
    type:String
  },
  details: {
    type:String
  },
  keyDataAsJSON: {
    type:String
  },
  keywords: {
    type:String
  }
});


var DockerUser=mongoose.model('DockerUser',DockerSchema);

module.exports={DockerUser};
