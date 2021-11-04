import React from 'react';
import style from './MenuItemTable.module.scss';
import menuItems from "./MenuItems";
import MenuItem from "../MenuItem";

const MenuItemTable = ({curCategory}) => {

  return (
      <div className={style.container}>
        <div className={style.categoryLabel}>{curCategory}</div>
        <div className={style.gridContainer}>
          {menuItems.filter((item) => {
            return item.category == curCategory
          }).map((item, idx) => (
              <MenuItem details={item} idx={idx+1} key = {idx}/>
              )
          )}
        </div>
      </div>
  );
};

export default MenuItemTable;