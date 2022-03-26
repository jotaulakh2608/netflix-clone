import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLog() {
  return (
    <div className='flex   h-0 relative z-10  w-full    '>
     

    <div className="flex justify-between w-nav mt-3 mr-14 ml-10   p-4 ">
        <img src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="kuj" className=' h-11 w-36'/>
        <div className="flex">
        <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-white absolute w-4  pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{top:'37px'}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>
    <select className="form-select appearance-none
     
      w-24
      pl-6
      px-3
      py-1.5
      text-sm
      font-normal
      text-white
      bg-transparent bg-clip-padding bg-no-repeat
      border border-solid border-white
      
      transition
      ease-in-out
      m-0
       focus:outline-none" aria-label="Default select example">
        <option selected>English</option>
        <option value="1">Hindi</option>
        
    </select>
  </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white absolute w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{top:'34px', right:'194px'}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
</svg>
 
</div>

 <button className=" cursor-pointer ml-8 flex items-center h-8  text-white text-base py-2 px-4 border-0 rounded " style={{backgroundColor:'#e50914'}} >
 <Link to={'/signIn' } className='text-white no-underline'>
 Sign In

 </Link>
</button>
        </div>
    </div>

    </div>
  )
}

export default NavbarLog