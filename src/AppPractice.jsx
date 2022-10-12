import React, {useState, useEffect} from 'react';
import "./appPracitce.css"
import Filter from './practice/filter/Filter';
import Movie from './practice/movie/Movie';

export default function AppPractice() {

    const [popular, setPopular] = useState([])
    const [filtered, setFilterd] = useState([])
    const [currentGenre, setCurrentGenre] = useState(0)

    useEffect(()=>{
        const getPopularMoives = async()=>{
          const response =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&+language=en-US&page=1')
          const movies = await response.json()
          setFilterd(movies.results)
          setPopular(movies.results) 
          
        }
        getPopularMoives()
    }, [])


  return (
    <div className='appPractice'>
        <div className="appPracitce-wrapper">
            <Filter
                popular={popular}
                setFilterd={setFilterd}
                filtered={filtered}
                currentGenre = {currentGenre}
                setCurrentGenre = {setCurrentGenre}
            />
            <div className="movie-wrapper">
                {
                    filtered?.map(movie => (
                        <Movie 
                          key={movie.id}
                          movie={movie}
                         />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
