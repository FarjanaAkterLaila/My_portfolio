
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Service from './Components/Service'
import Skill from './Components/Skill'

function App() {


  return (
    <div className='font-serif'>
   <Header></Header>
   <Hero></Hero>
   <About></About>
   <Skill></Skill>
   <Projects></Projects>
   <Service></Service>
   <Contact></Contact>
   <Footer></Footer>
    </div>
  )
}

export default App
