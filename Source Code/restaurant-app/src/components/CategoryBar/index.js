import React from 'react';
import style from './CategoryBar.module.scss'
import { useState } from 'react';

import Category from '../Category/index.js'
import categories from './Categories';


import {VscTriangleRight, VscTriangleLeft} from 'react-icons/vsc'

const CategoryBar = ({onSwitchCurCategory}) => {

  const nDisplay = 7
  const [lastIndex, setLastIndex] = useState(6)
  const moveLeft = () => {
    setLastIndex(lastIndex - nDisplay  < 0 ? categories.length - 1: lastIndex - 1)
  }
  const moveRight = () => {
    setLastIndex(lastIndex + 1 > categories.length - 1 ? nDisplay - 1 : lastIndex + 1)
  }
  
  return (
      <div className={style.container}>
        <div className={style.groupCategories}>
          <button className = {style.btn} onClick = {() => moveLeft()}><VscTriangleLeft/></button>
          {categories.map((category, index) => (
            (lastIndex - nDisplay < index && index <= lastIndex  && <Category
              key={category.id}
              category = {category}
              onSwitchCurCategory = {onSwitchCurCategory}
              >
            </Category>)
          ))}
          <button className = {style.btn} onClick = {() => moveRight()}><VscTriangleRight/></button>
        </div>
        
      </div>
  );
};

export default CategoryBar;