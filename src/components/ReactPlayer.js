import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class CompReactPlayer extends Component {

  render () {
    return <ReactPlayer url={this.props.url} controls='true'/>
  }
}

export default CompReactPlayer;