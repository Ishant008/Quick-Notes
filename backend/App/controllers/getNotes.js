import notesModel from "../models/notesModel.js";

const getNotes = async (req, res) => {
  const { email } = req.details;
  const noteId = req.params.noteId;
  if (noteId) {
    try {
      let note = await notesModel.findById(noteId);

      if (!note) {
        return res.json({
          error: true,
          message: "Note ID is invalid",
        });
      }
      return res.json({
        error: false,
        message: "note fetched successfuly",
        note,
      });
    } catch (err) {
      return res.status(500).json({
        error: true,
        message: "Internal server Error",
      });
    }
  }
  try{
    let notes = await notesModel.find({ email: email });
  if (!notes) {
    return res.json({
      error: true,
      message: "No notes to fetch",
    });
  }
  return res.json({
    error: false,
    message: "All notes are fetched successfully",
    notes,
  });
  } catch(err){
    return res.status(500)
    .json({
      error: false,
      message: "Internal server error",
      notes,
    })
  }
};

export default getNotes;
