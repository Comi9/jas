import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import i18next from 'i18next'

import Index from './routes/Index'
import About from './routes/About'
import Boards from './routes/Boards'
import Instructions from './routes/Instructions'
import Review from './routes/Review'
import CallForPapers from './routes/CallForPapers'
import Archive from './routes/Archive'
import Contact from './routes/Contact'

const Loader = () => (
  <div className='loader'>
    <div>Loading...</div>
  </div>
)

export default class App extends Component {
  state = { isMobile: false }

  componentDidMount() { this.modeListener() }

  modeListener() {
    const setLayout = () => this.setState({ isMobile: window.innerWidth < 1064 })
    window.addEventListener('load', () => setLayout(), false)
    window.addEventListener('resize', () => setLayout(), false)
  }

  changeLanguage(language) { i18next.changeLanguage(language) }

  render() {
    const { isMobile } = this.state
    return (
      <Suspense fallback={<Loader />}>
        <div className={`application ${isMobile ? 'is-mobile' : ''}`}>
          <Router basename='/jas'>
            <AppHeader
              isMobile={isMobile}
              changeLanguage={this.changeLanguage} />
            <article>
              <Route path='/' exact component={Index} />
              <Route path='/about' component={About} />
              <Route path='/boards' component={Boards} />
              <Route path='/instructions' component={Instructions} />
              <Route path='/review' component={Review} />
              <Route path='/call-for-papers' component={CallForPapers} />
              <Route path='/archive' component={Archive} />
              <Route path='/contact' component={Contact} />
            </article>
          </Router>
          <AppFooter />
        </div>
      </Suspense>
    )
  }
}
