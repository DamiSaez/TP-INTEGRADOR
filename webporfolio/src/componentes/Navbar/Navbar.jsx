import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return(
       <nav>
        
            <h1>Dami. Saez</h1>
            <div className='navBotones'>
            <a href='#proyecto'>Proyectos</a>
            <a href='#Sobre mi'>Sobre mi</a>
            <a href='#contacto'>Contacto</a>
            </div>
        
       </nav>
    )
}

export { Navbar }