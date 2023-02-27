import React from 'react';
import './Sectionform.css' 
import {AiOutlineLeft,AiOutlineRight } from  "react-icons/ai"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BsPerson, } from "react-icons/bs";
const Sectionform = () => {
    return(
        <section className='formulario' id='contacto'>
            <div>
                <h3><AiOutlineLeft  size="2rem" color='blue'/>Contacto<AiOutlineRight  size="2rem" color='blue'/></h3>
                <h1>Trabajemos juntos !</h1>
                <p>Estoy abierto a nuevos proyectos, tengamos una charla para discutir tus ideas<br/> y ver que podemos hacer juntos.</p>
                <p className='correo'><a href="#">click para mandarme un email</a> o contactame en mis redes sociales.</p>
                <div className='icons'>
                <a  href='#'><FaGithub size={"2rem"}/></a>
                <a  href='#'><FaLinkedin size={"2rem"}/></a>
                </div>
            </div>
            
            <div className='formUsuario'>
                <form action='https://formspree.io/f/xlekbybl' method='POST'>
                    <div className='name'>
                        <p>nombre</p>
                        <label htmlFor=""></label>
                        <input type="text" name='usuario' id='usuario_input' placeholder=' ingrese su nombre' required/>
                    </div>
                    <div className='mail'>
                        <p>e-mail</p>
                        <label htmlFor=""></label>
                        <input type="text" name="email" id="email_input" placeholder='ingrese su email' required/>
                    </div>
                    <div className='msaje'>
                        <p>mensaje</p>
                        <label htmlFor=""></label>
                        <textarea id='mensaje' name='body' cols={30} rows="5"  placeholder='ingrese un mensaje'required/>
                    </div>
                    <div className='bts'>
                        <button className="enviar" type='submit'>enviar</button>
                    </div>
                    
                </form>
            </div>
            
            
            
        </section>
        
    )
}

export { Sectionform }