import React from 'react'

import MenuSVG from '../../img/menu.svg'

import './menu.css'

const Menu = props => (
   <div className = 'Menu'>
      <button className = 'boton bSubir'>Subir un Meme</button>
      <button className = 'boton bLogin'>Login</button>
      <div
         className = 'bMenu'
         style = {{
            backgroundImage: `url( ${MenuSVG} )`
         }}
      />
   </div>
)
   
export default Menu