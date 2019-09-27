import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'

class CallForPapers extends Component {
  render() {
    const { t } = this.props

    return (
      <>
        <h1>{t('Call For Papers')}</h1>
      </>
    )
  }
}

export default withTranslation()(CallForPapers)