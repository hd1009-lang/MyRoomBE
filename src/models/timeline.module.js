const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema(
  {
    avatar:{
      type:String,
      required:true
    },
    logo:{
      type:String,
      required:true
    },
    type:String,
    timeExp:{
      required:true
    },
    experience:{
      type:String,
      required:true,
      maxlength:150
    }
  }
);

const TimeLine = mongoose.model('Timeline', timelineSchema);

module.exports = TimeLine;
