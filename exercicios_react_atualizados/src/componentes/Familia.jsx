import React from 'react'
import { filhosComProps } from '../utils/utils.js'

export default props =>
  <div>
    <h1>Família</h1>
    {filhosComProps(props)}

    {/* {React.Children.map(props.children, filho =>
      React.cloneElement(filho, { ...props }))} */}
    {/* {React.cloneElement(props.children, { ...props })} */}
    {/* {props.children} */}
  </div>