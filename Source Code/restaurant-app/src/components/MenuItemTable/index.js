import React from 'react';
import style from './MenuItemTable.module.scss';
import menuItems from "./MenuItems";
import MenuItem from "../MenuItem";

const MenuItemTable = (props) => {
  const{curCategory, onAdd} = props;
  return (
      <div className={style.container}>

        <div className={style.categoryLabel}>{curCategory === '' ? 'All foods' : curCategory}</div>
        <div className={style.gridContainer}>
          {menuItems.filter((item) => {
            return curCategory === '' || item.category === curCategory
          }).map((item, idx) => (
              <MenuItem details={item} idx={idx+1} key = {idx} onAdd={onAdd}/>
              )
          )}
        </div>
      </div>
  );
};

export default MenuItemTable;