import React from 'react';
import rick from '../../assets/rick.webp';
import bille from '../../assets/bille.png';
import proyecto from '../../assets/proyecto.png';
import './Body.css'
import {AiOutlineLeft,AiOutlineRight } from  "react-icons/ai"
const Body = () => {
    return(
        <section className='proyect' id="proyecto">
            <h2><AiOutlineLeft size="2rem" color='blue'/>Proyectos<AiOutlineRight size="2rem" color='blue'/></h2>

            
            <div className='uno'>
            <img src={rick} alt="rick" />

            <div>
            <h3>Rick and Morty </h3>
            <p>En este proyecto se busca desarrollar una APP con los personajes de Rick and Morty<br/> sacados de su API.
            Su obletivo principal es colocar el nombre de un personaje en el input</p>
            <p>y que la app me muetre todas las caracteristicas del mismo</p>  
            <p>Los lenguajes utilizados fueron: JS-HTML-CSS-REACT</p>   
            <button>visit</button> <button>view code</button>
            </div>
            
                 
            </div> 
            
            
            <div className='dos'>
            <img src={bille} alt="bille"/>

            <div>
            <h3>Billetera</h3>
            <p>En este proyecto se desarrollo una billetera en la cual se ingresaba un disponible<br/> y luego sus respectivos movimientos, ingreso y egreso,  para luego en base a eso dar el total. </p>
            <p>Los lenguajes utilizados fueron: JS-HTML-CSS</p>
            <button>visit</button> <button>view code</button>
            </div>
                
            </div>
             
            <div className='tres'>
                
            <img src={proyecto} alt="proyecto" />
            <div>
            <h3>One Page</h3>
            <p>En esta ocasion se buscaba realizar una one-page igual al bosquejo presentado en clase,<br/> tratando de copiar todos los detalles de la misma. </p>
            <p>Los lenguajes utilizados fueron:HTML-CSS</p>
            <button>visit</button> <button>view code</button>
            </div>
                
            </div>
            
        </section>
        
        
    )
}

export { Body }