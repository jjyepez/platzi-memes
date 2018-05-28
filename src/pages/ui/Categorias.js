import React from 'react'
import './categorias.css'

import Categoria from './Categoria.js'

const Categorias = props => (
   <div className = 'Categorias'>
      <h4>Búsquedas recientes ...</h4>
      <div className = 'scroller'>
         {props.categorias.map( (el, i) => (
            <Categoria
               key       = {i}
               categoria = {el}
            />
         ))}
      </div>
   </div>
)
   
export default Categorias