import notesModel from "../models/notesModel.js";

const deleteNote=async (req,res)=>{
  const noteId = req.params.noteId;
  const {email} = req.details
  try{
    let note= await notesModel.findOne({_id:noteId,email})
    if(!note){
      return res.status(404)
      .json({
        error:true,
        message:"Note not found"
      })
    }
    let response = await notesModel.deleteOne({_id:noteId})
    return res.json({
      error:false,
      message:"Note deleted successfully",
      response,
    })
  }catch(err){
    return res.status(500)
    .json({
      error:true,
      message:"Internal server Error"
    })
  }
}

export default deleteNote;