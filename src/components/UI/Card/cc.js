import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";


function Item({ content }) {
  const [isOpen, setIsOpen] = useState(false)

  return <motion.div layout>{isOpen && content}</motion.div>
}

function List({ items, selectedId }) {
  return (
    <AnimateSharedLayout  type="crossfade">
      <motion.ul layout>
        {items.map(item => (
          <Item content={item.content} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  )
}

export default List