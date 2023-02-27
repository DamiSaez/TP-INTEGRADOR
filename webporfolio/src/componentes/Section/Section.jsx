import React from 'react';
import avatarcinco from '../../assets/avatarcinco.png';
import './Section.css'
import { FaHandPeace,FaGithub,FaLinkedin } from "react-icons/fa";
import {AiOutlineLeft,AiOutlineRight } from  "react-icons/ai"
import { RxSlash} from  "react-icons/rx"
const Section = () => {
    return(
        <>
            <div className='contenedor'>
                <div className='texto'>
                    <h1>
                    Hola a todos, soy Dami <FaHandPeace color='orange'/><br/>
                    <AiOutlineLeft color='blue'size="2rem"/><RxSlash color='blue'/><span className='blue' >Desarrollador Web fullstack</span><AiOutlineRight color='blue'/>
                   
                    </h1>
                    <p>
                    Soy un desarrollador con experiencia en diferentes lenguajes, frameworks y tecnologias,<br />que se encuentra siempre en la busqueda de nuevos retos.
                    </p>
                    <div className='icons'>
                        <a  href='#'><FaGithub size={"2rem"}/></a>
                        <a  href='#'><FaLinkedin size={"2rem"}/></a>
                    </div>
                    
                    
                </div>   
                <div>
                    <img src={avatarcinco} alt="avatarcinco" />
                </div>
                    
                
            </div>
        </>
    )
}

export { Section }