import React, {createRef} from 'react';
import style from './CategoryBar.module.scss'
import { useState } from 'react';
import Category from '../Category'
import categories from './Categories';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {VscTriangleRight, VscTriangleLeft} from 'react-icons/vsc'

const CategoryBar = ({selectedCategory, onSwitchCurCategory}, ref) => {
  const [headIdx, setHeadIdx] = useState(0)

  const item_count = 5
  const item_size = 150

  const total_count = categories.length
  const moveLeftDisabled = (headIdx === 0)
  const moveRightDisabled = (total_count - headIdx === item_count)

  const moveLeft = () => {
    if (moveLeftDisabled)
      return;
    setHeadIdx((curHead) => curHead-1)
  }
  const moveRight = () => {
    if (moveRightDisabled)
      return;
    setHeadIdx((curHead) => curHead+1)
  }
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${item_count}, ${item_size}px)`,
  }

  return (
      <div className={style.container}>
          <FontAwesomeIcon className={`${style.icon} ${moveLeftDisabled && style.disabledIcon}`} icon={faCaretLeft} onClick={moveLeft}/>
        <div className={style.gridContainer} style={gridStyle}>
          { categories.slice(headIdx, headIdx + item_count).map((item, id) => (
            <Category key={id}
                      category={item}
                      onSwitchCurCategory={onSwitchCurCategory}
                      itemSize={item_size}
                      isSelected={selectedCategory===item.name}
                      />))
          }

        </div>
          <FontAwesomeIcon className={`${style.icon} ${moveRightDisabled && style.disabledIcon}`} icon={faCaretRight} onClick={moveRight}/>
      </div>
  );
};

export default CategoryBar;