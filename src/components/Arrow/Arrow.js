import React from 'react'

import './Arrow.css'

const arrow = (props) => (
  <button
      {...props}
      className={"Arrow" + props.direction}/>
);

export default arrow