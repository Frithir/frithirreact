import React from 'react'
import styled from 'styled-components'

const About = styled.section`

`

export default () => (
  <About className="section cascade bg-yellow light">
    <div className="container">
      <div className="black">
        <p><strong>What I do</strong></p>
        <ul>
          <li>
            <strong>Front-end</strong> <br />
            Javascript, ES6, React, Gulp, HTML5, CSS3
          </li>
          <li><strong>Back-end</strong><br />
          NodeJS, PHP, API's, Sys-admin, Letsencrypt, SQL</li>
          <li>
            <strong>CMS</strong><br />
            Contentful, Wordpress &amp; more...
          </li>
          <li>
            <strong>Apps</strong><br />
            Progressive Web Apps, React, Firebase
          </li>
          <li>
            <strong>Cloud</strong><br />
            AWS, Google, Firebase
          </li>
          <li>
            <strong>E-Commerce</strong><br />
            Woocommerce, Stripe &amp; more...
          </li>
        </ul>
      </div>
    </div>
  </About>
)
