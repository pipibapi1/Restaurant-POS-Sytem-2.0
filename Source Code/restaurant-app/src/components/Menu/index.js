import React from 'react';
import { useState } from 'react';
import CategoryBar from "../CategoryBar";
import MenuItemTable from "../MenuItemTable";
import style from './Menu.module.scss'

const Menu = () => {
  const [curCategory, setCurCategory] = useState('Juice')
  const switchCurCategory = (name) => {
    setCurCategory(name)
  }

  return (
      <div className={style.menuContainer}>
        <CategoryBar onSwitchCurCategory = {switchCurCategory}/>
        <MenuItemTable curCategory = {curCategory}/>
      </div>
  );
};

export default Menu;