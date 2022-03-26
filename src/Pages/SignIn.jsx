import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Banner.css'
import { FooterTwo } from '../components/FooterTwo'
import { SignInForm } from '../components/SignInForm'

function SignIn() {
  return (
  <>
 

    <div style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/2341e349-a6fc-4b04-a0ad-9b21defa1f88/IN-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg") `,
        backgroundSize: "cover",
        backgroundPosition: "center-center",
       height: '100%',
        backgroundColor: "black",
        
      }} >
       <div className="bg-black absolute   w-full top-0  left-0 opacity-50" style={{height:'1065px'}} >

        </div>
      <div>

  <logo className='m-10 mt-10 relative   z-20'>
  <Link to={'/'}>

      <img  src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="kuj" className=' mt-5 h-14  w-44'/>
  </Link>
      </logo>
      </div>
       
        
       
      <div className="flex flex-col relative items-center justify-center z-20">

<SignInForm/>
     
     <FooterTwo/>

      </div>
      
      </div>
 
  </>
      
  )
}

export default SignIn