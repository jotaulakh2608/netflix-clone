import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../axios'
import movieTrailer from 'movie-trailer'
import { HoverComponent } from './HoverComponent';

function Row({title, fetchUrl, isLargeRow}) {

  const [hover, sethover] = useState(false)

  
  function handleOver(){
    sethover(true)
  }
  function handleOut(){
    sethover(false)
  }


    const [movies, setmovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState('')
    
const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl)
        setmovies(request.data.results)
        console.log(request);
        return request
      }fetchData()
    }, [fetchUrl])

    const opts = {
      height:'390',
      width:'100%',
      playerVars:{
        autoplay:1
      }
    }

    const handleClick =(movie)=>{
      if(trailerUrl){
        settrailerUrl('')
      }
      else{
        movieTrailer(movie?.name || '').then(url=>{
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get('v'));
        }).catch(error=> console.log(error))
      }
    }


    
  return (
    <div className=' flex flex-col p-5' onMouseOver={handleOver} onMouseOut={handleOut}>
    <span className='font-bold table-cell pl-5 mb-3' style={{fontSize:'1.4vw', color:'#e5e5e5;'}}>
        {title}
    </span>
<div className="flex ml-5 no-scrollbar  max-w-fit overflow-x-scroll">

    {movies.map(movie=>( <>

<img key={movie.id} onClick={()=>handleClick(movie)} className={` hover:scale-105 transition-all ease-in w-full mr-1 rounded-md h-36 && ${isLargeRow && " h-64" } `} src={`${baseUrl}${isLargeRow ?movie.poster_path :movie?.backdrop_path}`} alt={movie.name} />

    </>

    ))}

</div>

 {trailerUrl && <YouTube className='mt-5'
videoId={trailerUrl}
opts={opts}
/>}
<div className="flex  max-w-fit  ">




</div>

    </div>
  )
}

export default Row