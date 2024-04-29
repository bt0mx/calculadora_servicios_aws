
import NavBar from "./components/navbar"
import Layaut from "./components/layaut"
import { Routes, Route, Navigate } from "react-router-dom"
{/*import { Navigate, Routes, Route } from "react-router-dom" */}
import Inicio from "./pages/inicio"
import Calculadora from "./pages/calculadora"
import Servicios from "./pages/servicios"

function App() {
  

  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <NavBar></NavBar>
      <Layaut>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/calculadora' element={<Calculadora></Calculadora>}></Route>
            <Route path='/servicios' element={<Servicios></Servicios>}></Route>
            {<Route path='*' element={<Navigate to="/" ></Navigate>}></Route>}
          </Routes>
      </Layaut>
      </div>
      {/*<Bloques></Bloques>*/}
    </>
  )
}

export default App
