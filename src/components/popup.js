import React, { Component } from 'react'
import styled from 'styled-components'
const fetch = window.fetch

class Popup extends Component {
  state = {
    title: '',
    toggle: ''
  }
  componentDidMount () {
    const popup = document.querySelectorAll('.popup')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.toggle]: 'open'
    })
  }

  openPupup = (e) => {
    e.preventDefault()
  }

  render ({title = 'click here', toggle}) {
    return (

    )
  }
}

export default Popup
