import React from 'react'
import './categorias.css'

import Categoria from './Categoria.js'

const Categorias = props => (
   <div className = 'Categorias'>
      <h4>Búsquedas recientes ...</h4>
      <div className = 'scroller'>
         {Array(4).fill('').map( (el, i) => (
            <Categoria
               key = {i}
            >{i}</Categoria>
         ))}
      </div>
   </div>
)
   
export default Categorias