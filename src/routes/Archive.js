import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class Archive extends Component {
  render() {
    const { t } = this.props

    return (
      <>
        <h1>{t('menu.archive')}</h1>
        <h3 className='secondary-color'>{t('2019')}</h3>
        <section className='archive-list'>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
          </div>
        </section>

        <h3 className='secondary-color'>{t('201x')}</h3>
        <h3 className='secondary-color'>{t('201x')}</h3>
        <h3 className='secondary-color'>{t('201x')}</h3>
      </>
    )
  }
}

export default withTranslation()(Archive)
