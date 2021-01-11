import React from 'react'

import './Arrow.scss'

const arrow = (props) => (
  <button
      {...props}
      className={"Arrow" + props.direction}/>
);

export default arrow