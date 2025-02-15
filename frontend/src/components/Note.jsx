import { MdOutlinePushPin, MdEdit, MdDelete } from "react-icons/md";
import Tags from "./Tags";
import moment from 'moment';
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";

const Note = ({note,getNotes,editNote}) => {
  const deleteNote= async (id)=>{
    try{
      let response = await axiosInstance.delete(`/notes/delete-note/${id}`)
      if(!response.data.error){
        toast.error('Note deleted Successfully', {
          position: "top-right",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          });
        getNotes()
      }
    }catch(error){
      console.log("Interna Error",error);
    }
    
  }
  return (
    <div className="flex flex-col gap-2 border-1 border-[#2e6f40] rounded p-2 h-fit hover:shadow-2xl transition-all duration-150">
      <div className="flex justify-between">
        <div className=" w-full">
          <h3 className="text-[20px]">{note.title}</h3>
          <p className="text-slate-600 text-[15px]">{moment(note.createdOn).format("Do MM YYYY")}</p>
        </div>
        <MdOutlinePushPin size={25} className="cursor-pointer"/>
      </div>
      <p className="text-[16px] flex-1 text-slate-600 line-clamp-5" title={note.content}>
      {note.content}
      </p>
      <div className="flex items-center gap-1">
        <div className="flex flex-wrap gap-1 flex-1">
          {note.tags.map((tag,index)=><Tags key={index} tag={tag}/>)}
        </div>
        <MdEdit onClick={()=>editNote(note._id)} size={24} className="text-slate-400 hover:text-[#2e6f40] cursor-pointer" />
        <MdDelete onClick={()=>deleteNote(note._id)} size={24} className="text-slate-400 hover:text-[#2e6f40] cursor-pointer" />
      </div>
    </div>
  );
};

export default Note;
