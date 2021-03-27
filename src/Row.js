import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchURL, isLarge}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        
        async function getMovies(){
            const response = await axios.get(fetchURL);
            setMovies(response.data.results)
        }
        getMovies()
    }, [fetchURL])

    // size of video player
   const opts = {
       height: "390",
       width: "100%",
       playerVars: {
           // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
       }
   }

   // get video from youtube 
   const movieClicked = (moviename) => {
    console.log(moviename);
    if (trailerUrl != "") setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

    return (
        <div className="row">
            <h1 className='row__title'>{title}</h1>
            <div className='row__posters'>
                {movies.map(movie=> {
                 return (

                     <img
                        className={`row__poster ${isLarge && "row__posterLarge"}`}
                        src={`${baseURL}${
                          isLarge ?  movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.title}
                        key={movie.id}
                        onClick={()=> movieClicked(movie.name || movie.title || movie.orginal_name)}
                    />

                 )
        
                })}
            </div>

            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            
        </div>
    )
}

export default Row
