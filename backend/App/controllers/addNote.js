import notesModel from "../models/notesModel.js";

const addNote = async (req, res) => {
  const { email } = req.details;
  const { title, content, tags } = req.body;
  if (!title) {
    return res.json({
      error: true,
      message: "title is required",
    });
  } else if (!content) {
    return res.json({
      error: true,
      message: "content is required",
    });
  }
  const note = new notesModel({
    title,
    content,
    tags,
    email,
  });
  await note.save();
  return res.json({
    error: false,
    message: "Note added successfuly",
    note,
  });
};

export default addNote;
