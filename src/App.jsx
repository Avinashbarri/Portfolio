import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar1 from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Project from './Components/Project'
import Contact from './Components/Contact'
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </>
  )
}

export default App
