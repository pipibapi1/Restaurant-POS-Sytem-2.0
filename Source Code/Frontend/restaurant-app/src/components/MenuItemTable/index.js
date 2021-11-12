import React from 'react';
import style from './MenuItemTable.module.scss';
import MenuItem from "../MenuItem";
import { useState } from 'react';
import axios from 'axios';



const MenuItemTable = (props) => {
  const{curCategory, onAdd} = props;
  const[menuItems, setMenuItems] = useState([]);
  axios.get('http://localhost:3000/items/get-all').then(res => {
            if(res.data.length > 0){
                setMenuItems(res.data);
            }
        })
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