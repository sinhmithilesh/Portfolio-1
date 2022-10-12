import React, {useState} from 'react'
import './work.scss'

export default function Work() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (direction) => {
    if(direction === "left"){
      if(currentSlide > 0){
        setCurrentSlide(currentSlide-1)
      }else{
        setCurrentSlide(2)
      }
    }
    else{
      if(currentSlide < data.length-1){
        setCurrentSlide(currentSlide+1)
      }else{
        setCurrentSlide(0)
      }
    }
  }

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ]; 


  return (
    <div className="works" id="works">
      <div className="slider" style={{transform : `translateX(-${currentSlide * 100}vw)`}}>

        { data.map(d => (
          
         <div className="container" key={d.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>  
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>      
              </div>     
              <div className="rightContainer"></div>
            </div>
            <div className="right">
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--1Udov0n---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/d9taiqwp0968js9hcn5u.png" alt="" />
            </div>
          </div>
        </div>
         
        ))}

      </div>
      <img src="assets/arrow.png" className='arrow left' alt=""  onClick={()=>handleClick('left')} />
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick('right')} />

    </div>
  )
}
