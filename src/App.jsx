
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
    <Toaster/>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
