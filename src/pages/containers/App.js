// --- React
import React, { Component } from 'react'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI from '../ui/AppUI'

class App extends Component {
  state = {
    memes: [],
    app: {
      version: 'beta 0.1'
    }
  }
  componentDidMount = event => {
    document.querySelector('head title').textContent = this.state.app.version

    const memes = [
      {uri:'c1.gif',tags:'cvander,live'},
      {uri:'c2.gif',tags:'cvander,live'},
      {uri:'f1.gif',tags:'freddy,reacciones'},
      {uri:'p1.gif',tags:'paula,bloopers'},
      {uri:'l1.gif',tags:'leonidas,gestos'},
      {uri:'f2.gif',tags:'freddy,reacciones'},
      {uri:'f3.gif',tags:'freddy,reacciones'},
      {uri:'c3.gif',tags:'cvander,live'},
      {uri:'p2.gif',tags:'paula,bloopers'},
      {uri:'w1.gif',tags:'winiberto,bloopers'},
      {uri:'c1.gif',tags:'cvander,live'},
      {uri:'c2.gif',tags:'cvander,live'},
      {uri:'f1.gif',tags:'freddy,reacciones'},
      {uri:'p1.gif',tags:'paula,bloopers'},
      {uri:'l1.gif',tags:'leonidas,gestos'},
      {uri:'f2.gif',tags:'freddy,reacciones'},
      {uri:'f3.gif',tags:'freddy,reacciones'},
      {uri:'c3.gif',tags:'cvander,live'},
      {uri:'p2.gif',tags:'paula,bloopers'},
      {uri:'w1.gif',tags:'winiberto,bloopers'},
    ]
    this.setState({ memes })

    /*
    const urlMemes = 'https://noesishosting.com/sw/loremdata/?a=rs&p=avatar,oracion,foto:20'
    fetch( urlMemes )
    .then( rslt => rslt.json() )
    .then( data => {
      this.setState({
        memes: data.rs
      })
    })
    */

  }
  handleSetRef = element => {
    this.App = element
  }
  render() {
    return (
      <AppUI
        memes = {this.state.memes}
        handleSetRef = {this.handleSetRef}
      />
    )
  }
}

export default App
