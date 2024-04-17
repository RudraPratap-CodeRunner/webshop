import React, { useState } from 'react' 
import css from './Header.module.css';
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg';
// import {GoThreeBars} from 'react-icons/go'
import { TfiAlignJustify } from "react-icons/tfi";

const Header = () => {
    const [ShowMenu,setShowMenu]=useState(false);
    const toggleMenu=()=>{
        setShowMenu((ShowMenu)=>!ShowMenu)
    }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>webshop</span>
        </div>
        <div className={css.right}>
            <div className={css.bars} onClick={toggleMenu}>
                {/* <GoThreeBars/> */}
                <TfiAlignJustify />
            </div>
            
                <ul className={css.menu} style={{display:ShowMenu? 'inherit':'none'}} >
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Salses</li>
                    <li>ENG</li>
                </ul>

            

            <input type="text" className={css.search} placeholder='search' />

            <CgShoppingBag className={css.cart} />
        </div>
    </div>
  )
}

export default Header