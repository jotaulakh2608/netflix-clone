import React from 'react'

function SectionThree() {
  return (
    <div className="flex bg-black pt-20 pr-12 pl-12  text-white h-96   justify-center items-center">
    <div className="w-1/2 flex-col flex relative bottom-4 ">
      <span className="text-5xl  font-bold pb-5">Watch everywhere.</span>
      <span className="text-3xl">
      Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
      </span>
    </div>

    <div className="flex w-1/2 items-center justify-center">
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        alt="sda"
        className="h-96 relative bottom-12 z-20"
      />
      <div className="absolute">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
          className="relative "
          style={{ width: "326px", bottom: "100px", right: "2px" }}
        ></video>
      </div>
    </div>
  </div>
  )
}

export default SectionThree