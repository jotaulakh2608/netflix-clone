import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const [show, setshow] = useState(false);

  function hide() {
    document.getElementById("video").style.opacity = 0;
  }

  function playClick() {
    setshow(!show);
  }
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function trunculate(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }

  const [display, setdisplay] = useState({
    display: "flex",
  });
  function player() {
    setdisplay({ display: "none" });
  }

  return (
    <div
      id="hi"
      className=" text-white   h-screen w-full justify-center object-contain  mb-20"
      style={{
        backgroundImage: `url(  "https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc-a-QKdqBkBMwhHSo9lnY76ziFo6toqhJK-AJ933dRY1YJwOzTzxmYVVar2BIxUlTsZsu6bbJiB96V3f-0sgBBOdQD4.webp?r=86c")`,
        backgroundSize: "cover",
        backgroundPosition: "center-center",
      }}
    >
    {
show===true?
    <ReactPlayer
        className="absolute  object-fill react-player"
       
        id="video"
        style={{ position: "absolute",  }}
        onEnded={hide}
        url={
          "https://storage.coverr.co/videos/7jWEjVcB41wt9s1BTZrZgpvYKVrfR01CN?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ3OTUwNTgwfQ.sFuIp7LKRtTrUMMDkdDN2sl2SjW28wQc4xZXHlEGAbU"
        }
        playing
        muted
        width="100%"
        height="100%"
      />
      :null}
      
      <ReactPlayer
        className="absolute object-fill w-full react-player"
        
        onEnded={hide}
        id="video"
        style={{ position: "absolute ", objectFit: "fill" }}
        url={
          "https://storage.coverr.co/videos/7jWEjVcB41wt9s1BTZrZgpvYKVrfR01CN?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ3OTUwNTgwfQ.sFuIp7LKRtTrUMMDkdDN2sl2SjW28wQc4xZXHlEGAbU"
        }
        playing
        muted
        
        width="100%"
        height="100%"
      />
      {/* 
    } */}

      <div className="flex absolute z-50 "></div>
      {/* <iframe title='he' src="https://player.vimeo.com/video/428128367?title=0&portrait=0&byline=0&autoplay=1" frameborder="0"/> */}

      <div className="flex flex-col relative top-24 pl-8  ">
        <div className="w-1/3 p-5 flex flex-col ">
          <img
            src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSwoCjdCILMgSBMQjIOR-Jgp3SSzG3eocWn7n4r80DwRescnJWGfHybczx0hERH-yRJmr_2XEgzr6t5LsFVgCWwpe7LwraoJs8UeSb6NTJfuxsQKn071SoxQmN1gU46RUfkFuEHumRJj4WNsA0omAJgGTYnp0Onh8wlpDJ2RwvBAmg.webp?r=a9d"
            className="mb-5"
            style={{ height: "180px" }}
            alt=""
          />

          <span
            className=" mb-5 "
            style={{
              fontSize: "1.4vw",
              fontWeight: "400",
              lineHeight: "1.4rem",
              textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
            }}
          >
            {/* {trunculate(movie.overview, 150)} */}
            Diagnosed with a terminal illness, a single mother encounters a
            suave bachelor as she grapples with the future of her headstrong
            six-year-old.
          </span>

          <div className="flex">
            <button
              className="justify-center w-32 mr-5 flex items-center rounded-md border-0 cursor-pointer  hover:bg-hover"
              onClick={playClick}
            >
              <svg
                className="pl-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Hawkins-Icon Hawkins-Icon-Standard"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span
                className="pl-3"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "2.6rem",
                  fontWeight: "bold",
                }}
              >
                Play
              </span>
            </button>
            <button
              className="w-40 justify-center flex items-center text-white rounded-md border-0 cursor-pointer  hover:bg-hover"
              style={{ backgroundColor: "rgba(109,109,110,0.7)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                className="pl-3"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "2.6rem",
                  fontWeight: "bold",
                }}
              >
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className=' banner--fadeBottom '/> */}
    </div>
  );
}


export default Banner;
