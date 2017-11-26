import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import GithubCorner from './components/GithubCorner'
import SocialMeta from './components/SocialMeta'
import ImageRow from './components/ImageRow'

import Welcome from './views/Welcome'
import About from './views/About'
import Experience from './views/Experience'
import CoffeeTime from './views/CoffeeTime'
import Contact from './views/Contact'

import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import globalStyles from './globalStyles'

import data from './data.json'

class App extends Component {
  state = {
    data
  }


  componentWillMount () {
    globalStyles()
    import('./netlifyIdentity')
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  render () {
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard
    } = this.getDocument('settings', 'global')
    return (
      <Router>
        <div>
          <SocialMeta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={socialMediaCard && socialMediaCard.image && siteUrl + socialMediaCard.image}
            twitterCreatorAccount={socialMediaCard && socialMediaCard.twitterCreatorAccount}
            twitterSiteAccount={socialMediaCard && socialMediaCard.twitterSiteAccount}
          />
          <ServiceWorkerNotifications readyMessage='This message is displayed when the Service Worker is registered' />
          <GithubCorner url='https://github.com/Firthir' />
          <Welcome page={this.getDocument('pages', 'home')} />
          <ImageRow collectionId="488" alt="Learning, reading, up skilling"/>
          <About page={this.getDocument('pages', 'about')} />
          <ImageRow collectionId="430468" alt="Office, space"/>
          {/* <Experience page={this.getDocument('pages', 'experience')}  /> */}
          <ImageRow collectionId="397770" alt="Coffee time, meetings, disscussion"/>
          <CoffeeTime page={this.getDocument('pages', 'about')} />
          <ImageRow collectionId="993239" alt="Interseting, eye catching"/>
          <Contact page={this.getDocument('pages', 'contact')}  />
        </div>
      </Router>
    )
  }
}

export default App
