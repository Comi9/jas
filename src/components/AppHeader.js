import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import brandEN from '../assets/images/brandEN.svg'
import brandRO from '../assets/images/brandRO.svg'
import gb from '../assets/images/gb.svg'
import ro from '../assets/images/ro.svg'
import i18next from 'i18next'

class AppHeader extends Component {
  constructor(props) {
    super(props)

    this.openMenu = this.openMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.toggleLanguage = this.toggleLanguage.bind(this)

    this.state = { isOpen: false, defaultEN: i18next.language === 'en' }
  }

  openMenu() { this.setState({ isOpen: !this.state.isOpen }) }

  hideMenu(e) {
    if (e && e.relatedTarget) e.relatedTarget.click()
    this.setState({ isOpen: false })
  }

  toggleLanguage() {
    this.setState(
      { defaultEN: !this.state.defaultEN },
      () => this.props.changeLanguage(this.state.defaultEN ? 'en' : 'ro')
    )
  }

  render() {
    const { isOpen, defaultEN } = this.state
    const { t, isMobile } = this.props

    const routeLinks = (
      <nav>
        <ul>
          <li><NavLink activeClassName='selected' to='/about'>{t('menu.about')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/boards'>{t('menu.boards')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/instructions'>{t('menu.instructions')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/review'>{t('menu.review')}</NavLink></li>
          <li className='decorated'><NavLink activeClassName='selected' to='/call-for-papers'>{t('menu.call_for_papers')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/archive'>{t('menu.archive')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/contact'>{t('menu.contact')}</NavLink></li>
        </ul>
      </nav>
    )
    const languageSwitch = () => {
      return (
        <img
          alt='Change language'
          src={defaultEN ? ro : gb}
          onClick={this.toggleLanguage} />
      )
    }
    return (
        <header className={`${isOpen ? 'is-open' : ''}`}>
          <section className='inner-section'>
            <section className='logo'>
              <NavLink exact to='/'>
                <img
                  alt='Journal logo'
                  src={defaultEN ? brandEN : brandRO} />
              </NavLink>
            </section>

            {!isMobile && routeLinks}

            <section className='language'>
              {languageSwitch()}
            </section>

            {isMobile && <section className='menu-container'>
              <button onClick={this.openMenu} onBlur={this.hideMenu} className='menu'>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </section>}
          </section>

          {isOpen && isMobile && routeLinks}
        </header>
    )
  }
}

export default withTranslation()(AppHeader)
