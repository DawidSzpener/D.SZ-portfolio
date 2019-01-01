import React from 'react'
import './Backdrop.css'

const backdrop = (props) => (
  props.show ? <div id='Backdrop' onClick={props.clicked}></div> : null
)

export default backdrop