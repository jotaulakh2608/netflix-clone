import React from 'react'
import { Link } from 'react-router-dom'

export const GetStartedButton = () => {
  return (
    <div>
            <span className="text-xl pb-5 ">
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>

            <form>
              <div className="flex pt-5">
                <input
                  className="   outline-none h-14 w-full text-base pl-5"
                  id="email-input"
                  type="email"
                  name="email-inputted"
                  placeholder="Email Address"
                />

                <button
                  className="w-6/12 text-white  outline-none border-0 text-3xl"
                  style={{ backgroundColor: "rgb(229, 9, 20)" }}
                  type="submit"
                >
                <Link to={'/signIn' } className='text-white no-underline'>

                  Get Started
                </Link>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ top: "407px", right: "320px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </form>
          </div>
  )
}
