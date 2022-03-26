import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div
      className={`flex fixed h-16 transition  duration-300 z-1 items-center ease-in w-screen  ${
        show && "bg-netflix"
      }`}
    >
      <div className="flex text-white absolute right-16 items-center z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" mr-4 font-bold h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <a href="ha" className="text-white mr-4 text-base no-underline ">
          Children
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 mr-4   w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <div className="flex mr-4 items-center ">
          <img className="rounded-md mr-2"
            src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className="flex justify-between w-full fixed h-16 "
        style={{
          backgroundImage:
            "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
        }}
      />
      <div className="flex absolute left-11 top-2 items-center z-50  ">
      <Link to={'/'}>

        <img
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="kuj"
          className="  h-8  w-24"
        />
      </Link>
        <ul className="list-none flex ">
          <li>
            <Link to={"/broo"} className="link font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/broo"} className="link">
              Tv Shows
            </Link>
          </li>
          <li>
            <Link to={"/broo"} className="link">
              Movies
            </Link>
          </li>
          <li>
            <Link to={"/broo"} className="link">
              New & Popular
            </Link>
          </li>
          <li>
            <Link to={"/broo"} className="link">
              My List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
