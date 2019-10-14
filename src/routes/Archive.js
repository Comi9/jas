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
          <a className='archive-item' href='public/jas2019-1.pdf' target='_blank'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
            <div className='description'>Nr. 1, 2019</div>
          </a>
          <a className='archive-item' href='public/jas2019-1.pdf' target='_blank'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
            <div className='description'>Nr. 2, 2019</div>
          </a>
        </section>

        <h3 className='secondary-color'>{t('201x')}</h3>
        <section className='archive-list'>
          <div className='archive-item'>
            <img src='/images/JAS-1-2019-wb.png' title='JAS' alt='JAS' />
            <div className='description'>Nr. 1, 2015</div>
          </div>
        </section>

        <h3 className='secondary-color'>{t('201x')}</h3>
        <h3 className='secondary-color'>{t('201x')}</h3>
      </>
    )
  }
}

export default withTranslation()(Archive)
