import './App.css'
import { FaGithub } from "react-icons/fa6";

function App() {

  return (
    <div className='container-app'>
      <h1>Links meus</h1>


      <a href="https://github.com/g1nnw7" className='links' target='_blank'>
      <FaGithub />
      Github
      </a>
    </div>
  )
}

export default App
