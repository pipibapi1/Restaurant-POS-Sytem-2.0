import React from 'react';
import CategoryBar from "../CategoryBar";
import MenuItemTable from "../MenuItemTable";
import style from './Menu.module.scss'

const Menu = () => {
  return (
      <div className={style.menuContainer}>
        <CategoryBar/>
        <MenuItemTable/>
      </div>
  );
};

export default Menu;