import React, {useState, useEffect} from 'react';
import requests from './request';
import axios from './axios';
import './Banner.css';


function Banner() {

    const [movie, setMovie] = useState([]);
    const truncate = (input, number) => {
      return input?.length > number ? input.substring(0, number -1) + "..." : input;
    } 

    useEffect(() => {
        const getMovie = async () => {
 
            const movies = await axios.get(requests.fetchNetflixOriginals || requests.fetchTopRated );
            await setMovie(
                movies.data.results[Math.floor(Math.random() * movies.data.results.length) - 1]
            )
        }
        getMovie()
    }, [])

    console.log(movie)
    return (
        <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
        >
            <div className="banner__content">
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                    <h1 className="banner__description">
                       {truncate(movie?.overview, 150)}
                    </h1>
                </div>
            </div>
            <div className="gradientFade"></div>
        </header>
    )
}

export default Banner
