import React from 'react'
import './logo.css'
import LogoSVG from '../../img/logo.svg'

const Logo = props => (
   <div
      className = 'Logo'
      style = {{
         backgroundImage: `url( ${LogoSVG} )`
      }}
   />
)
   
export default Logo