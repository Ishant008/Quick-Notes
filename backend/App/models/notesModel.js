import mongoose from 'mongoose';


const notesSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  tags:{
    type:[String],
    default:[]
  },
  email:{
    type:String,
    required:true
  },
  createdOn:{
    type:Date,
    default:new Date().getTime()
  },
})

const notesModel = mongoose.model("notes",notesSchema);

export default notesModel;