import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class Contact extends Component {
  render() {
    const { t } = this.props

    return (
      <div className='contact-page tac fw400 fs1-25em'>
        <p><span>{t('pages.contact.part1')}</span></p>
        <p className='fw300 fs0-75em'><span>{t('pages.contact.part2')}</span></p>
        <p className='fw300 fs0-75em'><span>{t('pages.contact.part3')}</span></p>
        <p><span><a href='https://artsib.ro'>{t('pages.contact.part4')}</a></span></p>
        <p><span><a href='http://reviste.ulbsibiu.ro/jas'>{t('pages.contact.part5')}</a></span></p>
        <p><span>{t('pages.contact.part6')}</span></p>
        <p><span>{t('pages.contact.part7')}</span></p>
      </div>
    )
  }
}

export default withTranslation()(Contact)
