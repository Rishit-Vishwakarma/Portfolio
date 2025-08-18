import { useState} from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AnimatePresence, motion, scale } from 'framer-motion'
import { Route, Routes , useLocation} from 'react-router-dom'
import './Css/App.css'
import ScrollToTop from './data/ScrollToTop'
import Home from './pages/Home'
import Project from './pages/Project'
import GetInTouch from './pages/GetInTouch'
import ProjectDetails from './pages/ProjectDetails'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const pageVariants = {
    initial: { opacity: 0, filter: "blur(2px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(2px)" }
  };

  const pageTransition ={
    duration: 0.2,
    ease: "easeInOut"
  };

  return (
    <div >
      <ScrollToTop />
      <AnimatePresence mode="wait">      
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}><Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /></motion.div>} />
          <Route path="/Project" element={ <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}> <Project menuOpen={menuOpen} setMenuOpen={setMenuOpen} /></motion.div>} />
          <Route path="/ProjectDetails/:id" element={ <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}> <ProjectDetails menuOpen={menuOpen} setMenuOpen={setMenuOpen} /></motion.div>} />
          <Route path="/GetInTouch" element={ <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition}> <GetInTouch menuOpen={menuOpen} setMenuOpen={setMenuOpen} /></motion.div> }  />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App
