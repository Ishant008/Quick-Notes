import { useEffect, useState } from "react";
import AddNoteBox from "../components/AddNoteBox";
import AddNoteModal from "../components/AddNoteModal";
import Note from "../components/Note";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice.js";
import { notesAction } from "../store/noteSlice.js";
import axiosInstance from "../utils/axiosInstance.js";
import { editAction } from "../store/editSlice.js";
import { ToastContainer } from "react-toastify";
import EmptyNotes from "../components/EmptyNotes.jsx";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);

  const getUser = async () => {
    try {
      let response = await axiosInstance.get("/user/get-user");
      if (response.data && !response.data.error) {
        dispatch(userAction.getUser(response.data.user.name));
      }
    } catch (err) {
      console.log("Internal Error");
    }
  };
  const getNotes = async () => {
    try {
      let response = await axiosInstance.get("/notes/get-notes");
      if (response.data && response.data.notes) {
        dispatch(notesAction.getNotes(response.data.notes));
      }
    } catch (err) {
      console.log("some error occured", err);
    }
  };
  const editNote = async (id) => {
    setOpenModal(true);
    try {
      let response = await axiosInstance.get(`/notes/get-notes/${id}`);
      if (!response.data.error) {
        dispatch(editAction.editNote(response.data.note));
        setEdit(true);
      }
    } catch (error) {
      console.log("Interna Error", error);
    }
  };

  useEffect(() => {
    getUser();
    getNotes();
  }, []);

  return (
    <>
      {notes.length === 0 ? (
        <EmptyNotes />
      ) : (
        
          <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:grid-rows-3 lg:grid-rows-4">
            {notes.map((note) => (
              <Note
                editNote={editNote}
                getNotes={getNotes}
                key={note._id}
                note={note}
              />
            ))}
          </div>
        
      )}
      <Modal
        isOpen={openModal}
        onRequestClose={() => {
          setOpenModal(false);
        }}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        className="lg:w-[40%] md:w-[70%] w-[90%] h-fit bg-white m-auto my-20 "
      >
        <AddNoteModal
          setEdit={setEdit}
          edit={edit}
          editNote={editNote}
          getNotes={getNotes}
          setOpenModal={setOpenModal}
        />
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <AddNoteBox openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Home;
