import Navbar from "./components/Navbar"
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from "./components/Footer"
import {  HashRouter as Router} from 'react-router-dom';


function App() {


  return (
    <>
    <Router>
      
      <Navbar />
      <div id="home" >
        <Home />
      </div>
      <div id="about" >
        <About />
      </div>
      <div id="projects" >
        <Project />
      </div>
      <div id="contact" >
        <Contact />
      </div>
      <Footer />
    </Router>
  </>
  )
}

export default App
