import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/57067522?s=460&u=3070aa40ee17f411d246877bc40e20f0689c5962&v=4"
                    alt=" Jairo Junior"
                />
                <div>
                    <strong>Jairo Junior</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br />
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
            </p>
            <footer>
                <p>Preço/Hora
                  <strong>R$ 100,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="whatsapp" />
                  WhatsApp
                </button>

            </footer>
        </article>
    )
}