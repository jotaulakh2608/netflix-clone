import React from 'react'

function Footer() {
  return (
    <div className=' h-96 bg-black' style={{color:'#757575'}}>
    
    <div className="flex flex-col p-36">
        <span className="text-base">
        Questions? Call
        <a className=' no-underline' style={{color:'#757575'}} href="000-800-040-1843"> 000-800-040-1843</a>
        </span>

        <ul className='list-none grid grid-cols-4  pl-0 gap-4'>
            <li>
                <a className='a-styling' href="sdg"> FAQ</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Investor Relations</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Privacy</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Speed Test</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Help Centre</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Jobs</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Cookie Preferences</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Legal Notices</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Account</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Ways to Watch</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Corporate Information</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Only on Netflix</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Media Centre</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Terms of Use</a>
            </li>
            <li>
                <a className='a-styling' href="sdg"> Contact Us</a>
            </li>
          
        </ul>
        <div class="flex  relative bottom-0 -left-6">
  <div class="mb-3 xl:w-96">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-white relative left-6 -bottom-1  w-4  pl-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white relative -bottom-1 -left-6  w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
</svg>
 
</div>
    </div>
    
    </div>
  )
}

export default Footer