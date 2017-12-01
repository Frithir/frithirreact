import React from 'react'
import styled from 'styled-components'

import Content from '../components/Content.js'
const About = styled.section``

export default ({ page }) => (
  <About className="section cascade bg-yellow light">
    <div className="container">
      <div className="black">
        <p><strong>{page.title}</strong></p>
        <Content source={page.content} />
      </div>
    </div>
  </About>
)
