import React, {useState} from 'react'
import "./app.scss"
import Contact from './component/contact/Contact'
import Intro from "./component/intro/Intro"
import Menu from './component/menu/Menu'
import Portfolio from "./component/portfolio/Portfolio"
import Testimonials from './component/testimonials/Testimonials'
import Topbar from './component/topbar/Topbar'
import Work from './component/work/Work'


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)



  return (
    <div className='app'>
      <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen = {menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>   
        <Portfolio/>
        <Work/>
        <Testimonials/> 
        <Contact/>
      </div> 
    </div>
  ) 
}
