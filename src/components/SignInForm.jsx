import React from "react";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.75)",
        minHeight: "550px",
        minWidth: "220px",
        padding: "40px 68px 40px",
      }}
      className="flex  justify-center mb-20"
    >
      <div className="w-72 flex flex-col ">
        <h1>Sign In</h1>
        <form className="flex flex-col " action="">
          <label
            className="absolute pl-5  label-floating  "
            style={{ top: "135px", color: "#8c8c8c" }}
          >
            {" "}
            Email or phone number
          </label>
          <input
            type="email"
            className="h-12 mb-5 border-0 rounded-md pl-5 outline-none "
            style={{ background: "#333", fontSize: "16px", color: "#8c8c8c" }}
          />
          <label
            className="absolute pl-5 "
            style={{ top: "206px", color: "#8c8c8c" }}
          >
            {" "}
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="  rounded-md h-12  pl-5 mb-10 outline-none border-0 "
            style={{ background: "#333", fontSize: "16px", color: "#8c8c8c" }}
          />
        </form>

        <button
          className=" cursor-pointer justify-center font-bold mb-3 flex items-center h-12 w-full  text-white text-base py-2 px-4 border-0 rounded "
          style={{ backgroundColor: "#e50914" }}
        >
        <Link to={'/browse'} className='no-underline text-white '>
          Sign In

        </Link>
        </button>
        <div className="flex justify-between items-center mb-14" style={{fontSize:'13px',color: "#8c8c8c"}}> 
        <div className="flex items-center">
          <input type="checkbox" name="remember" id="remember" className="" />
         
          
          <span>Remember Me</span>

        </div>
        <a href="0 " className=" no-underline hover:underline" style={{fontSize:'13px',color: "#8c8c8c"}} > 
        <span>
          Need help?
        </span>
          </a>
        </div>

        <div className="flex items-center mb-4" style={{fontSize:'13px',color: "#8c8c8c"}} >
          <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" className="h-5 w-5" alt="sadf" />
          <span className="pl-2">Login with Facebook</span>
        </div>

        <div className="flex mb-4" style={{fontSize:'16px',color: "#8c8c8c"}}>
          <span  >
          New to Netflix?
          </span>
          <a href="sadf" className="no-underline hover:underline pl-1 text-white">
            Sign Up Now
          </a>
        </div>

        <span style={{fontSize:'13px',color: "#8c8c8c"}}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="asd" className="no-underline hover:underline pl-1 ">Learn more.</a> 
        </span>
      </div>
    </div>
  );
};
