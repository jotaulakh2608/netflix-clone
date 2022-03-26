import React, { useState } from 'react'

export const Questions = ({data}) => {

    const [show, setshow] = useState(false)
    function handleClick(){
        if(show===false){
setshow(!show)
        }
        else{
            setshow(false)
        }
    }
  return (
      <>

    <ul className=' list-none pl-0  m-1 ' >
     <li className=' '>
         <button className='button   text-3xl pl-5 text-white text-left border-0 mb-1 ' 
         style={{backgroundColor:"#303030 ", width:'800px'}} onClick={handleClick} >
           {data.title}
         </button>
         

         <svg xmlns="http://www.w3.org/2000/svg" className={`h-6  w-6 svg ${show?'rotate-45':''} `} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
     </li>
     </ul>
     {show?
      <div className=' relative pt-5 pb-5 transition ease-in-out duration-300 ' style={{backgroundColor:"#303030 ", width:'800px',right:'13px', bottom:'7px'}} >
     <span className='text-left text-3xl p-7 inline-block '> 
{data.description}
     </span>
     </div>:null
     }
      </>
  )
}
