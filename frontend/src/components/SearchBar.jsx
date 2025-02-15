import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [search,setSearch] = useState("")
  const onChange=(e)=>{
    setSearch(e.target.value);
    
  }
  const removeAll=()=>{
    setSearch("")
  }
  return (
    <div className="bg-[#3f7b50] flex items-center justify-between rounded md:px-3 px-1 2xl:w-[50%] lg:w-[30%] h-[40px] w-[40%]">
      <div className="flex items-center w-[90%] gap-1">
      <IoSearch size={22}/>
      <input value={search} onChange={onChange} type="text" placeholder="Search" className=" h-full text-[18px] font-light placeholder:text-white outline-0 w-full"/>
      </div>
      
      {search && <RxCross2 onClick={removeAll} size={22} className="cursor-pointer"/>}
    </div>
  )
}

export default SearchBar
