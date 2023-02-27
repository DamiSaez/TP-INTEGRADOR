import React from 'react';
import './Sectionmy.css';
import { DiGithubBadge, DiJavascript1, DiReact, DiCss3, DiHtml5 } from "react-icons/di";
import {AiOutlineLeft,AiOutlineRight } from  "react-icons/ai"
const Sectionmy = () => {
    return(
        <section className='habilidades' id='Sobre mi'>
            <div>
                <h1><AiOutlineLeft/>Sobre mi<AiOutlineRight/></h1>
                <h3>Herramientas y lenguajes</h3>
                <p>Estos son los distintos lenguajes, frameworks y tecnologias que utilizo en mi dia a dia</p>
            </div>
            <div className='logos'>
            <h1><DiGithubBadge size="5Rem"/></h1>
            <h1><DiJavascript1 size="5Rem"/></h1>
            <h1><DiReact size="5Rem"/></h1>
            <h1><DiCss3 size="5Rem"/></h1>
            <h1><DiHtml5 size="5Rem"/></h1>
            </div>

        </section>
    )
}

export { Sectionmy }