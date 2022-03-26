import React from 'react'

function SectionOne() {
  return (
    <div className="flex bg-black pt-20 pr-12 pl-12  text-white h-96   justify-center items-center">
    <div className="w-1/2 flex-col flex relative bottom-4 ">
      <span className="text-5xl  font-bold pb-5">Enjoy on your TV.</span>
      <span className="text-3xl">
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
        players and more.
      </span>
    </div>

    <div className="flex w-1/2 items-center justify-center">
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        alt="sda"
        className="h-96 relative bottom-12 z-20"
      />
      <div className="absolute">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          className="relative "
          style={{ width: "372px", bottom: "53px", right: "2px" }}
        ></video>
      </div>
    </div>
  </div>
  )
}

export default SectionOne