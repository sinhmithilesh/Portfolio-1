import React from 'react'
import "./app.css"
import { useEffect, useState } from 'react'
import Movie from './ComponentFilterAnimation/Movie'
import Filter from './ComponentFilterAnimation/filter/Filter'
import { motion , AnimatePresence} from "framer-motion"

export default function AppAnimation() { 
  const [popular, setPopular] = useState([])
  const [filtered, setFilterd] = useState([])
  const [activeGenre , setActiveGenre] = useState(0)
  
  
  useEffect(()=>{
    const fetchPopular = async() => {
      const response =  await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&+language=en-US&page=1')
      const movies = await response.json()
      setPopular(movies.results)
      setFilterd(movies.results)
    }
    fetchPopular()
  }, [])
 


  return (
    <div>
      <Filter 
        popular={popular} 
        setFilterd={setFilterd} 
        activeGenre={activeGenre} 
        setActiveGenre={setActiveGenre}/>
     
      <motion.div  
        className="popular-movies">
          <AnimatePresence>
            {filtered?.map(movie => (
            <Movie key={movie.id} movie={movie}/>
          ))}
          </AnimatePresence>
      </motion.div>
    </div>
  )
}
