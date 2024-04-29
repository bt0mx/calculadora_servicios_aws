import '../components/button.css';
import { NavLink } from "react-router-dom"

const Inicio = () => {
  const btnLink = 'block inline-block py-1 text-black hover:text-accent cursor-pointer mr-4'
  const activeLink = 'block inline-block py-1 text-accent mr-4'
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" >Calculadora de Precios
        </h1>
        <p className="mb-8 leading-relaxed">
Un Centro de Excelencia de Nube  es una entidad dentro de una organización dedicada a impulsar y facilitar la adopción exitosa de la nube en toda la empresa. Su objetivo principal es alinear la estrategia de la nube con los objetivos comerciales y tecnológicos de la organización, promoviendo las mejores prácticas y estandarizando los procesos relacionados con la nube.</p>
        <div className="flex justify-center">
         {/*<button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Explorar Calculadora</button>*/}
          <button className='buttonC'><NavLink to="/calculadora" className={(isActive) => isActive? activeLink:btnLink}>Explorar Calculadora</NavLink></button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://b-drive.com.mx/assets/images/blog/prensa5.png" />
      </div>
    </div>
  </section>
  )
}

export default Inicio