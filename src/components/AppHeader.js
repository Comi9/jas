import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
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
    const enBrand = <>Performance Arts <span className='en'>Journal</span></>
    const roBrand = <><span className='ro'>Jurnalul</span> Artelor Spectacolului</>

    const routeLinks = (
      <nav>
        <ul>
          <li><NavLink activeClassName='selected' to='/about'>{t('About')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/boards'>{t('Boards')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/instructions'>{t('Instructions')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/review'>{t('Review')}</NavLink></li>
          <li className='decorated'><NavLink activeClassName='selected' to='/call-for-paper'>{t('Call for papers')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/archive'>{t('Archive')}</NavLink></li>
          <li><NavLink activeClassName='selected' to='/contact'>{t('Contact')}</NavLink></li>
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
                {this.state.defaultEN ? enBrand : roBrand}
                <section className='misc'>
                  {t('Department of Drama and Theatre Studies')}
                </section>
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
