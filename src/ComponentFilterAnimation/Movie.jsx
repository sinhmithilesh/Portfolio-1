import React from 'react'
import "./movie.css";
import { motion } from "framer-motion"


export default function Movie({movie}) {
  return (
    <motion.div 
      animate={{opacity:1}} 
      initial={{opacity: 0}}
      exit={{opacity : 0}}
      layout
      className='movies'>
        <div className="movie-wrapper">
          <h2>{movie?.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} alt="" />
        </div>
         
    </motion.div>
  )
}
