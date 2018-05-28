import React from 'react'
import './meme.css'

const Meme = props => {
   const memeDir = 'src/img/memes/'
   return (
      <div className = 'Meme'>
         <img
            className = 'memeGIF'
            width = '100%'
            src = { memeDir + props.meme.uri}
         />
      </div>
   )
}
   
export default Meme