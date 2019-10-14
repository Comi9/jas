import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class Boards extends Component {
  render() {
    const { t } = this.props

    return (
      <div className='boards-page'>
        <h1 className='tac'>{t('pages.boards.sicentific_board')}</h1>
        <div className='scientific-board'>
          <section className='page-content tac'>
            <p>Dr. Constantin Chiriac, Professor, Lucian Blaga University of Sibiu</p>
            <p>Dr. Cristian Radu, Professor, Lucian Blaga University of Sibiu</p>
            <p>Dr. George Banu, Professor, Université Sorbonne Nouvelle - Paris 3</p>
            <p>Dr. Noel Witts, Professor, Leeds Beckett University</p>
          </section>
          <section className='flex-row'>
            <section className='page-content tac'>
              <p>Ariane Mnouchkine</p>
              <p>Declan Donnellan</p>
              <p>Eugenio Barba</p>
              <p>Silviu Purcărete</p>
              <p>Gigi Căciuleanu</p>
              <p>Krystian Lupa</p>
              <p>Lev Dodin</p>
              <p>Peter Brook</p>
              <p>Peter Stein</p>
              <p>Klaus Maria Brandauer</p>
              <p>Eimuntas Nekrošius</p>
              <p>Joël Pommerat</p>
              <p>Neil LaBute</p>
              <p>Kazuyoshi Kushida</p>
              <p>Alvis Hermanis</p>
              <p>Christoph Marthaler</p>
              <p>Evgeny Mironov</p>
              <p>Thomas Ostermeier</p>
            </section>
            <section className='page-content tac'>
              <p>Luk Perceval</p>
              <p>Tim Robbins</p>
              <p>Vasile Șirli</p>
              <p>Philippe Genty</p>
              <p>Rimas Tuminas</p>
              <p>Ohad Naharin</p>
              <p>Robert Wilson</p>
              <p>Mikhail Baryshnikov</p>
              <p>Ioan Holender</p>
              <p>Isabelle Huppert</p>
              <p>Wajdi Mouawad</p>
              <p>Hideki Noda</p>
              <p>Peter Sellars</p>
              <p>Sidi Larbi Cherkaoui</p>
              <p>Pippo Delbono</p>
              <p>Stan Lai</p>
              <p>Michael Thalheimer</p>
              <p>Emmanuel Demarcy-Mota</p>
            </section>
          </section>
        </div>

        <h1 className='tac'>{t('pages.boards.editorial_board')}</h1>
        <div className='editorial-board'>
          <section className='flex-column'>
            <section className='page-content tac'>
              <p>PRESIDENT: Dr. Constantin Chiriac, Professor, Lucian Blaga University of Sibiu</p>
              <p>EDITOR-IN-CHIEF: Dr. Cristian Radu, Professor, Lucian Blaga University of Sibiu</p>
              <p>ASSOCIATE EDITOR: Dr. Ion M. Tomuș, Professor, Lucian Blaga University of Sibiu</p>
              <p>MANAGING EDITOR: Dr. Andrei C. Șerban, Assistant Lecturer, Lucian Blaga University of Sibiu</p>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Boards)
