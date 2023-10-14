'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          At Nukta Lab, we are at the forefront of technological innovation, crafting solutions that blend the precision of fine craftsmanship with the limitless possibilities of modern technology.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p> Our name, <span>"Nukta,"</span> which means <span>"dot" </span> in Arabic, represents the core of our philosophy—precision as the starting point for groundbreaking innovation. </p>
      </div>

    </main>
  )
}