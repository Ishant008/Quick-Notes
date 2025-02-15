import notesModel from "../models/notesModel.js";

const editNote=async (req,res)=>{
  const { email } = req.details;
  const { title, content, tags } = req.body;
  const noteId = req.params.noteId;
  
    if(!title&&!content&&!tags){
      return res.json({
        error:false,
        message:"No changes Provided"
      })
    }
    try{
      let updateNote = await notesModel.updateOne(
        { _id: noteId },
        {
          title,
          content,
          tags,
          email,
        }
      );
      return res.json({
        error:false,
        message:"Note updated successfully",
        updateNote
      })
    }catch (err) {
      return res.status(500).json({
        error: true,
        message: "Internal server Error",
      });
    }
  
}

export default editNote;