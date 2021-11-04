import React, {createRef} from 'react';
import style from './CategoryBar.module.scss'
import { useState } from 'react';
import Category from '../Category'
import categories from './Categories';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import {VscTriangleRight, VscTriangleLeft} from 'react-icons/vsc'

const CategoryBar = ({onSwitchCurCategory}, ref) => {
  const [headIdx, setHeadIdx] = useState(0)

  const container_width = window.innerWidth * 0.66
  const item_count = 5
  const item_padding = 30
  const item_width = 200
  const total_count = categories.length
  // const moveLeft = () => {
  //   setLastIndex(lastIndex - nDisplay  < 0 ? categories.length - 1: lastIndex - 1)
  // }
  // const moveRight = () => {
  //   setLastIndex(lastIndex + 1 > categories.length - 1 ? nDisplay - 1 : lastIndex + 1)
  // }
  // const gridStyle = {
  //   display: 'grid',
  //   gridTemplateColumns: `repeat(${item_count}, ${item_width}px)`,
  //   gridColumnGap: `${item_padding}px`,
  // }
  return (
      <div className={style.container}>
          <FontAwesomeIcon icon={faChevronLeft}/>
        <div className={style.groupCategories}>
          {/*{categories.map((category, index) => (*/}
          {/*  (lastIndex - nDisplay < index && index <= lastIndex  && <Category*/}
          {/*    key={category.id}*/}
          {/*    category = {category}*/}
          {/*    onSwitchCurCategory = {onSwitchCurCategory}*/}
          {/*    >*/}
          {/*  </Category>)*/}
          {/*))}*/}
          { categories.slice(headIdx, headIdx + item_count).map((item, id) => (
            <Category key={id}
                      category={item}
                      onSwitchCurCategory={onSwitchCurCategory}
            />))
          }

        </div>
          <FontAwesomeIcon icon={faChevronRight}/>
      </div>
  );
};

export default CategoryBar;