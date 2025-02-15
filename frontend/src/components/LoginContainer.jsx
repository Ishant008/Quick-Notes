import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"
import axiosInstance from "../utils/axiosInstance.js";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [showPassword, setShoePassword] = useState(false);
  const [error, setError] = useState("");
  const emailElement = useRef("");
  const passwordElement = useRef("");
  const togglePassword = () => {
    setShoePassword(!showPassword);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    setError("")
    let email = emailElement.current.value;
    let password = passwordElement.current.value;
    if (!email) {
       setError("Please enter Email");
       return
    }else if (!password) {
       setError("Please enter the password");
       return
    }
    login(email,password);
  };
  
  const login= async (email,password)=>{
    let response = await axiosInstance.post('/user/login',{email,password})
    if(response.data.error){
      setError(response.data.message);
      return
    }
    let token = response.data.token
    if(token){
      localStorage.setItem("token",token)
      navigate("/home")
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center  text-center">
      <div className="bg-white md:w-[400px] w-[90%] border-2 rounded border-[#2e6f40] flex flex-col px-5 gap-4 py-8 shadow-2xl">
        <form onSubmit={hadleSubmit} className="flex flex-col items-center gap-3">
          <h1 className="text-[25px] font-light mb-6">Login</h1>
          <input
            ref={emailElement}
            className="py-2 px-3 w-full outline-0 border-1 border-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <div className="flex w-full justify-between py-2 px-3 border-1 border-gray-400">
            <input
              ref={passwordElement}
              className="outline-0 w-[80%]"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={togglePassword}
                size={22}
                className="cursor-pointer text-[#2e6f40]"
              />
            ) : (
              <FaEye
                onClick={togglePassword}
                size={22}
                className="cursor-pointer text-[#2e6f40]"
              />
            )}
          </div>
          {error && <p className=" w-full px-1 text-left text-red-800">{error}</p>}
          <button className="w-full text-white py-2.5 bg-[#2e6f40] cursor-pointer hover:bg-[#70af82] ">
            Login
          </button>
        </form>
        <p>
          Not registered yet?{" "}
          <Link className="text-[#2e6f40] underline" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
