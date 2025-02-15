import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import notesSlice from './noteSlice.js'
import editSlice from './editSlice.js';


 const store = configureStore({
  reducer:{
    user:userSlice.reducer,
    notes:notesSlice.reducer,
    editNote:editSlice.reducer,
  }
 })

 export default store;