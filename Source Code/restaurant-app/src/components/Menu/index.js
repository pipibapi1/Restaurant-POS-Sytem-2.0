import React from 'react';
import { useState } from 'react';
import CategoryBar from "../CategoryBar";
import MenuItemTable from "../MenuItemTable";
import style from './Menu.module.scss'

const Menu = () => {
  const [curCategory, setCurCategory] = useState('')
  const switchCurCategory = (name) => {
    if (name === curCategory) {
      setCurCategory('')
    }
    else {
      setCurCategory(name);
    }
  }

  return (
      <div className={style.menuContainer}>
        <CategoryBar onSwitchCurCategory = {switchCurCategory} selectedCategory={curCategory}/>
        <MenuItemTable curCategory = {curCategory}/>
      </div>
  );
};

export default Menu;