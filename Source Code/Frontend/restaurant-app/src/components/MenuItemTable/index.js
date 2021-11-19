import React from 'react';
import style from './MenuItemTable.module.scss';
import MenuItem from "../MenuItem";
import { useState } from 'react';
import axios from 'axios';



const MenuItemTable = (props) => {
  const {curCategory, onAddItemQuantity, showDetailHandler, menuItems} = props;

  return (
      <div className={style.container}>
        <div className={style.categoryLabel}>{curCategory === '' ? 'All foods' : curCategory}</div>
        <div className={style.gridContainer}>
          {menuItems.filter((item) => {
            return curCategory === '' || item.category === curCategory
          }).map((item, idx) => (
              <MenuItem
                  menuItem={item}
                  idx={idx}
                  key={idx}
                  onAddItemQuantity={onAddItemQuantity}
                  showDetailHandler={showDetailHandler}/>
              )
          )}
        </div>
      </div>
  );
};

export default MenuItemTable;