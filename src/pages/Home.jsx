import { useState } from 'react'
import '../Css/Home.css'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="parent-container">
      <div className="comp">
        <Navbar onMenuToggle={setMenuOpen}/>
        <Main menuOpen={menuOpen}/>
        <Projects menuOpen={menuOpen}/>
        <Footer menuOpen={menuOpen}/>
      </div>
    </div>
  )
}

export default Home