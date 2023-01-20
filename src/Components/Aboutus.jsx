import React from "react";
import Foto from '../assets/Images/Catalogo salas/18.jpg'


export default function About() {
  return (
  
			
    
    <section id="about">
     
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Bienvenido, Somos HogarPlus

            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="mb-8 leading-relaxed text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300"> </h2>
          <p className="mb-8 leading-relaxed text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Somos una empresa dedicada a la venta de muebles, colchones, lencería.  Todo lo que necesites para tener tu hogar soñado.
          </p>
          <div className="flex justify-center flex space-x-4">
            
            
            <a
            href="#Rooms"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
            >
              Salas
              </a>
            
              <a
            href="#Dinindroom"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
            >
              Comedores
              </a>
          </div>

          
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Foto}

    
          />
        </div>
      </div>
    </section>
    
    
  );
}
