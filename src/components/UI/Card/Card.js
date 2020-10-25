import { motion } from "framer-motion";
import React from 'react';

const Card = ( props, { isVisible }) => (
    <motion.div
      className="Card"
      onClick={props.clicked}
      key={props.title}
      animate={{ opacity: isVisible ? 1 : 0 }}>
      <img src={props.background} alt="card_bg"></img>
    </motion.div>
)

export default Card