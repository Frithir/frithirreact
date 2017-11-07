import React from 'react'
import styled from 'styled-components'

import StyledForm from '../components/NetlifyForm'

const Contact = styled.section ``

export default () => (
  <Contact className="section cascade">
    <div className="container">
      <p className="white">
        Always interested in cool ideas. Do you have digital project? <a className="email pink popup" href="">Let's talk</a>.
      </p>
    </div>
    <StyledForm />
  </Contact>
)
