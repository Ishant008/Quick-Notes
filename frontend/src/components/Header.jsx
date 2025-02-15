import { useNavigate } from "react-router-dom"
import Profile from "./Profile"
import SearchBar from "./SearchBar"
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "../store/userSlice.js"


const Header = () => {
  const user = useSelector(store=>store.user)
  const dispatch=useDispatch()
 
  const navigate = useNavigate()
  const Logout=()=>{
    navigate("/login")
    dispatch(userAction.getUser(""))
    localStorage.clear()
  }
  
  return (
    <div className="flex justify-between items-center bg-[#2e6f40] shadow-2xl min-h-[60px] md:px-4 px-1 overflow-clip text-white">
    <img className="md:w-[90px] w-[60px] invert " src="/img/logo.png" alt="Logo" />
    {user && <><SearchBar /> <Profile  Logout={Logout}/></>}
    </div>
  )
}

export default Header
