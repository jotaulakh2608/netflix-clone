import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import requests from '../requests';

function HomePage() {


  return (
    <div style={{background:'#141414', width:'100%' ,}}>
     
   
        <Navbar/>
        <div className=" absolute h-screen w-full  " style={{background:' linear-gradient(77deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 85%)'}}  >

        </div>
     <Banner/>
   <div className="flex justify-between w-full fixed h-16 banner--fadeBottom--down" style={{top:'620px'}}>
     
   </div>
  
       
     <div className="relative " style={{top:'-160px'}}>

    <Row title={"Limited Series"} isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
    <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
    <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
    <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
    <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
    <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
    <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
     </div>
   </div>
  )
}

export default HomePage