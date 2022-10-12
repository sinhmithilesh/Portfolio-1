import React, { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio }from "../../data"
import { useEffect } from 'react'


export default function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  useEffect(()=> {

    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      
      case "web":
        setData(webPortfolio)
        break;   

      case "mobile":
        setData(mobilePortfolio)
        break;
      
      case "design":
        setData(designPortfolio)
        break;   
      
      case "cotent":
        setData(contentPortfolio)
        break;   

        default:{
          setData(featuredPortfolio)
        }
       
    }

  },[selected])

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },

    {
      id: 'web',
      title: 'Web App',
    },

    {
      id: 'mobile',
      title: 'Mobile App',
    },

    {
      id: 'design',
      title: 'Design',
    },

    {
      id: 'content',
      title: 'Content',
    },
  ]

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">

          {data.map(d => (
             <div key={d.id} className="item">
              <img
                src={d.img}
                alt=""
              ></img>
             <h3>{d.title}</h3>
           </div>
          ))}

       
      </div>
    </div>
  )
}
