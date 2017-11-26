import React from 'react'
import styled from 'styled-components'

const CoffeeTime = styled.section ``

export default ({ page }) => (
  <CoffeeTime className="section cascade bg-pink">
    <div className="container">
      <p className="black">
        {page.title}
      </p>
    </div>
  </CoffeeTime>
)
