import React from 'react'

function SectionTwo() {
  return (
    <div className="flex bg-black pt-20 pr-12 pl-12 text-white h-96   justify-center items-center">
    <div className="flex w-1/2 items-center justify-center flex-col">
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        alt="sda"
        className="h-96 relative bottom-12 "
      />

      <div
        className="h-20 border-2 border-solid relative bg-black rounded-lg border-gray-600 w-80"
        style={{ bottom: "160px" }}
      >
        <div className="flex items-center">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            className="h-16 p-2 w-12 pr-5"
            alt=""
          />

          <div className="flex flex-col pr-16">
            <span className="text-base font-bold">Stranger Things</span>
            <span className="text-base" style={{ color: "#0071eb" }}>
              Downloading...
            </span>
          </div>

          <img
            className="w-10 h-10"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="w-1/2 flex-col flex  relative bottom-6  ">
      <span className="text-5xl  font-bold pb-5">
        Download your shows to watch offline.
      </span>
      <span className="text-3xl">
        Save your favourites easily and always have something to watch.
      </span>
    </div>
  </div>
  )
}

export default SectionTwo