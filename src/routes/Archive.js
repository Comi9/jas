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
          <a className='archive-item' href='archive/jas-2019-1.pdf' target='_blank'>
            <img src='images/jas-2019-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2019</div>
          </a>
          <span className='archive-item'>
            <img src='images/jas-default.png' title='JAS' alt='JAS' />
            <div className='description'>2/2019 <span className='fs0-75em'>({t('pages.archive.publishing')})</span></div>
          </span>
        </section>

        <h3 className='secondary-color'>{t('2015')}</h3>
        <section className='archive-list'>
          <a className='archive-item' href='archive/jas-2015-1.pdf' target='_blank'>
            <img src='images/jas-2015-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2015</div>
          </a>
          <a className='archive-item' href='archive/jas-2015-2.pdf' target='_blank'>
            <img src='images/jas-2015-2.png' title='JAS' alt='JAS' />
            <div className='description'>2/2015</div>
          </a>
        </section>

        <h3 className='secondary-color'>{t('2014')}</h3>
        <section className='archive-list'>
          <a className='archive-item' href='archive/jas-2014-1.pdf' target='_blank'>
            <img src='images/jas-2014-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2014</div>
          </a>
        </section>

        <h3 className='secondary-color'>{t('2011')}</h3>
        <section className='archive-list'>
          <a className='archive-item' href='archive/jas-2011-1.pdf' target='_blank'>
            <img src='images/jas-2011-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2011</div>
          </a>
        </section>

        <h3 className='secondary-color'>{t('2010')}</h3>
        <section className='archive-list'>
          <a className='archive-item' href='archive/jas-2010-1.pdf' target='_blank'>
            <img src='images/jas-2010-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2010</div>
          </a>
          <a className='archive-item' href='archive/jas-2010-2.pdf' target='_blank'>
            <img src='images/jas-2010-2.png' title='JAS' alt='JAS' />
            <div className='description'>1/2010</div>
          </a>
        </section>

        <h3 className='secondary-color'>{t('2009')}</h3>
        <section className='archive-list'>
          <a className='archive-item' href='archive/jas-2009-1.pdf' target='_blank'>
            <img src='images/jas-2009-1.png' title='JAS' alt='JAS' />
            <div className='description'>1/2009</div>
          </a>
        </section>
      </>
    )
  }
}

export default withTranslation()(Archive)
