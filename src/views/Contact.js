import React from 'react'
import styled from 'styled-components'

import StyledForm from '../components/NetlifyForm'

const Contact = styled.section ``

export default ({ page }) => (
  <Contact className="section cascade">
    <div className="container">
      <p className="white">
        {page.title}{page.content}
      </p>
    </div>
    <StyledForm />
  </Contact>
)
