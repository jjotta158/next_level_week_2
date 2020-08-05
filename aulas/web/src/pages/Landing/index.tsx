import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

export default function Landing () {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo proffy"/>
                    <h2>Sua Plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg}
                    alt="Landing Image" 
                    className="hero-image"/>
                
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 Conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

