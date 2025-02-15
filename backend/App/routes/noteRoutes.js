import express from 'express';
import addNote from '../controllers/addNote.js';
import Authentication from '../middleware/Authentication.js';
import getNotes from '../controllers/getNotes.js';
import deleteNote from '../controllers/deleteNote.js';
import editNote from '../controllers/editNote.js';

const noteRoutes = express.Router()

noteRoutes.post('/add-note/',Authentication,addNote);
noteRoutes.get('/get-notes/:noteId?',Authentication,getNotes);
noteRoutes.put('/edit-note/:noteId',Authentication,editNote);
noteRoutes.delete('/delete-note/:noteId',Authentication,deleteNote);

export default noteRoutes;