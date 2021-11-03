import React from 'react';
import style from './MenuItemTable.module.scss';
import menuItems from "./MenuItems";
import MenuItem from "../MenuItem";

const MenuItemTable = () => {
  return (
      <div className={style.container}>
        <div className={style.categoryLabel}>Sea Food</div>
        <div className={style.flexContainer}>
          {menuItems.map((item, idx) => (
              <MenuItem details={item} idx={idx+1}/>
              )
          )}
        </div>
      </div>
  );
};

export default MenuItemTable;