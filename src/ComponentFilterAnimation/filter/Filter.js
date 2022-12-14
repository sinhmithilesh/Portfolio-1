import React, {useEffect } from "react";
import "./filter.css"

export default function Filter({popular, setFilterd, activeGenre, setActiveGenre}){
 
    useEffect(()=>{
        if(activeGenre === 0){
            setFilterd(popular)
            return
        }
        const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre))
        setFilterd(filtered) 
    },[activeGenre])

    return(
        <div className="filter">
            <button className={activeGenre === 0 ? 'active' : ''} onClick={()=>setActiveGenre(0)}>All</button>
            <button className={activeGenre === 35 ? 'active': ""} onClick={()=>setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? 'active' : ""} onClick={()=>setActiveGenre(28)}>Action</button>
        </div>

    )
}