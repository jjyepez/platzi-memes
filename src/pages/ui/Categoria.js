import React from 'react'
import './categoria.css'

const Categoria = props => (
   <div
      className = 'Categoria'
      style = {{
         backgroundColor: props.categoria.color
      }}
   >
      {props.categoria.nombre}
   </div>
)
   
export default Categoria