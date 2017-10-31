import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GithubCorner from './components/GithubCorner'

import ImageRow from './components/ImageRow'

import Welcome from './views/Welcome'
import About from './views/About'
import Experience from './views/Experience'
import CoffeeTime from './views/CoffeeTime'
import Contact from './views/Contact'

import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import globalStyles from './globalStyles'

class App extends Component {
  componentWillMount () {
    globalStyles()
  }

  render () {
    return (
      <Router>
        <div>
          <ServiceWorkerNotifications readyMessage='This message is displayed when the Service Worker is registered' />
          <GithubCorner url='https://github.com/Firthir' />
          <Welcome />
          <ImageRow collectionId="488" alt="Learning, reading, up skilling"/>
          <About />
          <ImageRow collectionId="430468" alt="Office, space"/>
          <Experience />
          <ImageRow collectionId="397770" alt="Coffee time, meetings, disscussion"/>
          <CoffeeTime />
          <ImageRow collectionId="993239" alt="Interseting, eye catching"/>
          <Contact />
        </div>
      </Router>
    )
  }
}

export default App
