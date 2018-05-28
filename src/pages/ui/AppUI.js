// --- React
import React from 'react'
// --- css, recursos, data y otras fuentes
import './AppUI.css'
// --- contenedores y UI
import Logo       from './Logo'
import Menu       from './Menu'
import Buscador   from './Buscador'
import Categorias from './Categorias'
import Contenido  from './Contenido'

import './menu.css'
import './AppUI.css'

const AppUI = props => (
  <div
    className = "AppUI"
    ref       = {props.handleSetRef}
  >
    <nav>
      <div className = 'Menu'>
        <Logo/>
        <Menu/>
      </div>
      <Buscador/>
    </nav>

    <Categorias
      categorias = {props.categorias}
    />
    <Contenido
      memes      = {props.memes}
    />
  </div>
)

export default AppUI
