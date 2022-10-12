import React from 'react'
import "./testimonials.scss"

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Tushar Bansil",
      title : "Senior Developer",
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQHzDaia2O6LQA/profile-displayphoto-shrink_200_200/0/1554795171721?e=2147483647&v=beta&t=ifkzBrRBj9M3ZEGq8K1r8lde6-dfhTuWwNa3RunoRo0",
      icon: "assets/twitter.png",
      desc: 'ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur'
    },

    {
      id: 2,
      name: "Manav Chauhan",
      title : "Product Manager at TCS",
      img: "https://thetechportal.com/wp-content/uploads/2019/11/Sanjay-Gupta-google-india-head-featured-the-tech-portal.jpg",
      icon: "assets/twitter.png",
      desc: 'ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur',
      featured: true
    },

    {
      id: 3,
      name: "Kritika lamba",
      title : "Operation Manager at Capegemini",
      img: "https://www.shethepeople.tv/wp-content/uploads/2021/06/images-1.jpeg",
      icon: "assets/twitter.png",
      desc: 'ipsum dolor sit amet consectetur adipisicing elit. Error, pariatur'
    },
  ]


  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">

        { data.map(d => (
             <div key={d.id} className={d.featured ? 'card featured' : 'card'}>
               <div className="top">
                <img src={d.icon} className='left' alt="" />
                <img className='user' src={d.img} alt="" />
                <img className='right' src="assets/youtube.png" alt="" />
               </div>
               <div className="center">{d.desc}</div> 
             <div className="bottom">
               <h3>{d.name}</h3>
               <h4>{d.title}</h4>
             </div>
           </div>
        ))}

      </div>
    </div>
  )
}
