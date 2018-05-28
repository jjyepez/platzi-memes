import React from 'react'
import './buscador.css'

import LupaSVG from '../../img/buscar.svg'

const Buscador = props => (
   <div className = 'Buscador'>
      <input type='search' className = 'qInput' placeholder = 'Buscar memes'/>
      <button
         className = 'bBuscar'
         style = {{
            backgroundImage: `url( ${LupaSVG} )`
         }}
      />
   </div>
)
   
export default Buscador