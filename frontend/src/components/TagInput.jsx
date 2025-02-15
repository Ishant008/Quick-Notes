import { useEffect, useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Tags from "./Tags";
import { useSelector } from "react-redux";

const TagInput = ({setAllTags,edit}) => {
  const [inputTag, setInputTag] = useState([]);
  const tagElement = useRef("");
  const editdata = useSelector(store=>store.editNote)
  const removeTag = (id) => {
    let tags = [...inputTag];
    tags = tags.filter((tag) => tags.indexOf(tag) !== id);
    setInputTag(tags);
    setAllTags(tags)
  };
  useEffect(()=>{
      if(edit){
        setInputTag(editdata.tags)
      }
    },[edit])
  const handleTag = () => {
    let tag = tagElement.current.value.trim().split(" ").join("");
    if (tag) {
      let tags = [...inputTag];
      if (tags.indexOf(tag) === -1) {
        tags.push(tag);
        setInputTag(tags);
        setAllTags(tags)
      }
    }
    tagElement.current.value = "";
  };
  return (
    <div className="w-full min-h-[40px] flex flex-wrap items-center p-1 gap-2">
      {inputTag.length >= 1 &&
        inputTag.map((tag, index) => (
          <span
            key={index}
            className="w-fit flex items-center text-[#2e6f40] border-1 border-[#2e6f40] rounded"
          >
            <Tags tag={tag} />
            <RxCross2
              className=" cursor-pointer"
              onClick={() => removeTag(index)}
            />
          </span>
        ))}
      <input
        ref={tagElement}
        type="text"
        placeholder="#tag"
        className=" w-[80px] outline-0 border-1 rounded p-1 border-[#2e6f40]"
      />
      <div className="h-[35] w-[35px] flex items-center justify-center bg-[#2e6f40] border-1 border-transparent rounded text-white hover:bg-white hover:border-[#2e6f40] hover:text-[#2e6f40] transition-all duration-200">
        <IoAdd onClick={handleTag} className="text-[30px]" />
      </div>
    </div>
  );
};

export default TagInput;
