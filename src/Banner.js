import React,{useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import "./Banner.css";

function Banner() {

    const [movie,setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchMostwatched); 
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...": str;
    }
    return (
        <header class="banner"
         style={{backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundPosition:"center center"}}
        >
            <div class="banner_contents">
            <h1 class="banner_title"> 
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div class="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My Fav</button>
            </div>
            <h1 class="banner_description">{truncate(movie?.overview,150)}</h1>

            </div>
            <div class="banner-fadebottom"></div>
        </header>
    )
}

export default Banner
