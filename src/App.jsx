import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Members from './Components/Members'
import Navbar from './Components/Navbar'
// import { Router } from "react-router-dom"
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Banner />
        <Members />
        <Contact />
      </div>
    </>
  )
}

export default App
