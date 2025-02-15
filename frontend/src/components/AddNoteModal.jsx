import { useEffect, useRef, useState } from "react";
import TagInput from "./TagInput";
import {  useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";

const AddNoteModal = ({ setOpenModal,getNotes,edit,setEdit }) => {
  const [error, setError] = useState("");
  const titleElement = useRef("");
  const contentElement = useRef("");
  const [tags, setAllTags] = useState([]);
  const editdata = useSelector(store=>store.editNote)

  useEffect(()=>{
    if(edit){
      titleElement.current.value = editdata.title;
      contentElement.current.value = editdata.content;
      setAllTags(editdata.tags)
    }
  },[edit])
 

  const addNote = async (e) => {
    e.preventDefault();
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    if (!title) {
      setError("Title is required");
      return;
    } else if (!content) {
      setError("Content is required");
      return;
    }
    if(edit){
      try {
        let response = await axiosInstance.put(`/notes/edit-note/${editdata._id}`, {
          title,
          content,
          tags,
        });
        if(!response.data.error){
          getNotes()
          toast.success('Note Updated Successfully', {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
          setOpenModal(false);
          setEdit(false)
        }
      } catch (error) {
        console.log("Internal Error");
      }
    }else {
      try {
        let response = await axiosInstance.post("/notes/add-note", {
          title,
          content,
          tags,
        });
        if(!response.data.error){
          getNotes()
          toast.success('Note Added Successfully', {
            position: "top-right",
            autoClose: 700,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
          setOpenModal(false);
        }
      } catch (error) {
        console.log("Internal Error");
      }
      
    }
    
  };

  return (
    <form onSubmit={addNote} className="flex flex-col p-4 gap-2">
      <label htmlFor="title" className="text-slate-400 ">
        TITLE
      </label>
      <input
        ref={titleElement}
        type="text"
        name="title"
        placeholder="eg. I have to attend a meeting"
        className="h-12 outline-none text-2xl"
      />
      <label htmlFor="content" className="text-slate-400">
        CONTENT
      </label>
      <textarea
        ref={contentElement}
        type="text"
        name="content"
        placeholder="content"
        className="text-lg outline-0 bg-slate-100 p-2"
        rows={4}
      />
      <TagInput edit={edit} setAllTags={setAllTags} />
      <button
        type="submit"
        className="bg-[#2e6f40] rounded-md w-full p-3 text-lg text-white hover:bg-[#50785b]"
      >
        Add
      </button>
    </form>
  );
};

export default AddNoteModal;
