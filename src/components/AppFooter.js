import React, { Component } from 'react'
import partners from '../assets/images/partners.svg'
import { withTranslation } from 'react-i18next'

class AppFooter extends Component {

  render() {
    return (
      <footer>
        <img src={partners} alt='Partners' />
        <h4>&copy; {this.props.t('Department of Drama and Theatre Studies')} 2019</h4>
      </footer>
    )
  }
}

export default withTranslation()(AppFooter);
