import React from 'react'
import styled from 'styled-components'

const Welcome = styled.section`
  h1 {
    font-size: 7vw;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
      overflow: hidden;
    }
  }
  .logo {
    font-size: 10vw;
    text-align: center;
  }
`

export default () => (
  <Welcome>
    <section className="section">
      <div className="container">
        <div className="welcome">
          <h1>
            <span className="cream">Hi I'm Alex Frith</span><br/>
            <span className="pink">A freelance developer</span><br/>
          </h1>
        </div>
      </div>
    </section>
  </Welcome>
)
