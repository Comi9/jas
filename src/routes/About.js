import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class About extends Component {
  render() {
    const { t } = this.props

    return (
      <div className='about-page tac fw400 fs1-25em'>
        <p className='fw300 fs0-75em'><span>{t('pages.about.part1')}</span></p>
        <p><span>{t('pages.about.part2')}</span></p>
        <p className='fw300 fs0-75em'><span>{t('pages.about.part3')}</span></p>
        <p><span>{t('pages.about.part4')}</span></p>
        <p><span>{t('pages.about.part5')}</span></p>
        <p><span>{t('pages.about.part6')}</span></p>
        <p><span>{t('pages.about.part7')}</span></p>
        <p><span>{t('pages.about.part8')}</span></p>
      </div>
    )
  }
}

export default withTranslation()(About)
