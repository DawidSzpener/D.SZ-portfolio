import { motion } from "framer-motion";
import React from 'react';

const Card = ( props ) => (
    <motion.div
      className="Card"
      onClick={props.clicked}
      key={props.title}>
      <img src={props.background} alt="card_bg"></img>
    </motion.div>
)

export default Card