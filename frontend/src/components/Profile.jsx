import { capitalize, nameInitial } from "../utils/helping";
import { useSelector } from "react-redux";

const Profile = ({Logout}) => {
   
  const user = useSelector(store=>store.user)

  return (
    <div className="md:w-[170px] w-[120px] flex items-center justify-between gap-2">
      <div className="md:h-[40px] md:min-w-[43px] min-w-[30px] h-[30px] flex justify-center items-center text-lg md:text-2xl rounded-[50%] bg-white text-[#2e6f40]">
      {nameInitial(user)}
      </div>
      <div className="flex-1 flex flex-col gap-0">
        <p className="md:text-lg text-xs/3 line-clamp-2 md:line-clamp-1 ">{capitalize(user)}</p>
        <button onClick={Logout} className="text-left underline font-light cursor-pointer md:text-[17px] text-[12px] mt-0">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
