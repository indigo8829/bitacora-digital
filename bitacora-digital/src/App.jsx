import { Outlet } from "react-router-dom"

import Header from "./layout/Header.jsx"
import Footer from "./layout/Footer.jsx"

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
