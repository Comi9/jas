import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class About extends Component {
  render() {
    const { t } = this.props

    return (
      <div className='about-page tac fw400 fs1-25em'>
        <p className='fw300 fs0-75em'><span>{t('pages.contact.part1')}</span></p>
        <p><span>{t('pages.contact.part2')}</span></p>
        <p className='fw300 fs0-75em'><span>{t('pages.contact.part3')}</span></p>
        <p><span>{t('pages.contact.part4')}</span></p>
        <p><span>{t('pages.contact.part5')}</span></p>
        <p><span>{t('pages.contact.part6')}</span></p>
        <p><span>{t('pages.contact.part7')}</span></p>
        <p><span>{t('pages.contact.part8')}</span></p>
      </div>
    )
  }
}

export default withTranslation()(About)
