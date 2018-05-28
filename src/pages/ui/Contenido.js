import React from 'react'
import './contenido.css'

import Meme from './Meme'

const Contenido = props => (
   <div>
      <h4>Tendencias ...</h4>
      <div className = 'Contenido'>
         {props.memes.map( (el, i) => (
            <Meme
               key = {i}
               meme = {el}
            />
         ))}
      </div>
   </div>
)
   
export default Contenido