// --- React
import React, { Component } from 'react'
// --- recursos, data y otras fuentes
// --- contenedores y UI
import AppUI from '../ui/AppUI'

class App extends Component {
  
  state = {
    categorias: [],
    memes: [],
    app: {
      version: 'beta 0.1'
    }
  }

  componentDidMount = event => {
    document.querySelector('head title').textContent = this.state.app.version
    const categorias = [
      {nombre:'reacciones', color: '#128595'},
      {nombre:'bailes', color: '#1c78bb'},
      {nombre:'caras', color: '#3abd21'},
      {nombre:'risas', color: '#e1c004'},
      {nombre:'gestos raros', color: '#ee1f8c'},
      {nombre:'misc', color: '#ea4d4d'},
    ]
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
    this.setState({ memes, categorias })
  }

  handleSetRef = element => {
    this.App = element
  }

  render() {
    return (
      <AppUI
        memes        = {this.state.memes}
        categorias   = {this.state.categorias}
        handleSetRef = {this.handleSetRef}
      />
    )
  }
}

export default App
