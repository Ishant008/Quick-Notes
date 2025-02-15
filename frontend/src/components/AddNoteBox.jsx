import { IoMdAdd } from "react-icons/io";

const AddNoteBox = ({ openModal,setOpenModal }) => {
  return (
    <button
      className={`${openModal?"hidden":"block"} border-2 border-transparent fixed bottom-3 right-3 w-[50px] h-[50px] rounded-md bg-[#2e6f40] flex justify-center items-center cursor-pointer text-white hover:bg-white hover:border-[#2e6f40] hover:text-[#2e6f40] transition-all duration-300 z-3 shadow-md`}
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <IoMdAdd size={30} />
    </button>
  );
};

export default AddNoteBox;
