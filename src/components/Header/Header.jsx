import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import { GrGamepad } from 'react-icons/gr'
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.title}>
          <GrGamepad size={25} className={s.icon}/>
          <span> Game Store</span>
        </Link>
      </div>
      <div className={`${s.wrapper} ${s.cart}`}>
        <CartBlock/>
      </div>
    </div>
  );
}

export default Header;
