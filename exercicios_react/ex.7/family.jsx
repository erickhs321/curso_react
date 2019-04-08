import React from 'react'

export default props => (
  <div>
    <h1>Família</h1>
    {/* passando clone da propriedade com operador spread */}
    { React.cloneElement(props.children, { ...props })}
  </div>
)