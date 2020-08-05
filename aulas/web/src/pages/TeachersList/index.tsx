import React from 'react'

import PageHeader from '../../components/PageHeader/'
import TeacherItem from '../../components/TeacherItem/'

import './style.css'

export default function TeachersList() {
    return (
      <div id="page-teacher-list">
        <PageHeader title="Estes são os Proffys disponíveis">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject" />
            </div>
            <div className="input-block">
              <label htmlFor="">Dias da Semana</label>
              <input type="text" id="week_day" />
            </div>
            <div className="input-block">
              <label htmlFor="time">Horário</label>
              <input type="text" id="time" />
            </div>
          </form>
        </PageHeader>

        <main>
          <TeacherItem/>
        </main>
      </div>
    );
}