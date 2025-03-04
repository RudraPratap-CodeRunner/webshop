import React from 'react'
import css from './Hero.module.css'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import HeroImg from '../../assets/hero.png';
import { motion } from "framer-motion"

const Hero = () => {
  const transition={duration:3,type:"spring"}
  return (
    <div className={css.container}>

      {/* leftside */}
      <div className={css.h_sides}>
        <span className={css.txt1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection </span>
          <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
        </div>
      </div>

      {/* middle side hero image */}

      <div className={css.wrapper}>
        <motion.div className={css.blueCircle}
        initial={{bottom:"4rem"}}
        whileInView={{bottom:"2rem"}}
       
        transition={transition}

        ></motion.div>
        <motion.img
        initial={{bottom:"0rem"}}
        whileInView={{bottom:"2rem"}}
        transition={transition}
        src={HeroImg} alt="" width={600}/>
          <motion.div 
          initial={{right:'4%'}}
          whileInView={{right:"0%"}}
          transition={transition}
          
          className={css.cart2}>
            <RiShoppingBagFill/>

            <div className={css.signup}>
              <span>Best Signup Offers</span>

              <div>
                <BsArrowRight/>
              </div>
            </div>
          </motion.div>
      </div>

      {/* rightside */}

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero