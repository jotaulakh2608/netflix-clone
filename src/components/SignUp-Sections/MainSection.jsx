import React from 'react'
import { GetStartedButton } from '../GetStartedButton'

function MainSection() {
  return (
    <div className="flex flex-col text-white justify-center items-center h-screen relative top-0 ">
          <div
            className=" flex flex-col justify-center items-center text-center pb-5"
            style={{ width: "500px" }}
          >
            <span className="text-5xl font-bold pb-5">
              Unlimited movies, TV shows and more.
            </span>
            <span className="text-3xl ">Watch anywhere. Cancel anytime.</span>
          </div>
          <GetStartedButton/>
        </div>
     

  )
}

export default MainSection