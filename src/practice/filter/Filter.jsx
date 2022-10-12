import React, {useEffect} from 'react';
import "./filter.css"

export default function Filter({popular, setFilterd, setCurrentGenre, currentGenre}) {
    const buttons = [
        {name : 'All', id: 0}, 
        {name : 'Comedy', id: 35} , 
        {name: 'Action', id: 28},
    ]
    
    useEffect(()=>{
        if(currentGenre === 0){
            setFilterd(popular)
            return 
        }
        else{
            const filteredMovies = popular.filter(movie => movie.genre_ids.includes(currentGenre))
            setFilterd(filteredMovies)
        }
    },[currentGenre])

    const filterHandler =(e)=> {
       buttons.forEach(genre => {
        if(genre.name === e.target.value){
            setCurrentGenre(genre.id)
        }
       })
    }

  return (
    <div className='fitler'>
        {buttons.map((genre, index) => (
            <button 
                className={genre.id === currentGenre ? "active" : ''}
                key={index}  
                value={genre.name} 
                onClick={filterHandler}>{genre.name}</button>
        ))}
    </div>
  )
}
