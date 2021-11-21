import React, {createRef, useEffect} from 'react';
import style from './CategoryBar.module.scss'
import { useState } from 'react';
import Category from '../Category'
import categories from './Categories';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CategoryMobile from '../CategoryMobile'


const CategoryBar = ({selectedCategory, onSwitchCurCategory}, ref) => {
  const [headIdx, setHeadIdx] = useState(0)
  const [itemCount, setItemCount] = useState(5)
  const [itemSize, setItemSize] = useState(150)

  let mqList = [
    window.matchMedia('(max-width: 1500px'),
    window.matchMedia('(max-width: 400px'),

  ]
  const handleMediaQuery = (e) => {
    if (e.matches) {
      setItemSize(120)
      setItemCount(4)
    }
    else {
      setItemSize(150)
      setItemCount(5)
    }
  }

  mqList[0].onchange = handleMediaQuery;
  useEffect(() => {
    handleMediaQuery(mqList[0])
  }, [])

  const total_count = categories.length
  const moveLeftDisabled = (headIdx === 0)
  const moveRightDisabled = (total_count - headIdx === itemCount)

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
    gridTemplateColumns: `repeat(${itemCount}, ${itemSize}px)`,
  }

  return (
      <div className={style.container}>
        <div className={style.containerMobile}>
          <FontAwesomeIcon icon={faChevronLeft}/>
          <div className={style.filterWrapper}>
            <div className={style.filter}>
              {categories.map((item, idx) => (
                  <CategoryMobile
                      key={idx}
                      category={item}
                      isSelected={selectedCategory===item.name}
                      onSwitchCurCategory={onSwitchCurCategory}
                  />
              ))}
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className={style.chevronRight}/>

          <div className={style.search}>

          </div>
        </div>
        <div className={style.containerPc}>
          <FontAwesomeIcon className={`${style.icon} ${moveLeftDisabled && style.disabledIcon}`} icon={faCaretLeft} onClick={moveLeft}/>
          <div className={style.gridContainer} style={gridStyle}>
            { categories.slice(headIdx, headIdx + itemCount).map((item, id) => (
              <Category key={id}
                        category={item}
                        onSwitchCurCategory={onSwitchCurCategory}
                        itemSize={itemSize}
                        isSelected={selectedCategory===item.name}
                        />))
            }

          </div>
            <FontAwesomeIcon className={`${style.icon} ${moveRightDisabled && style.disabledIcon}`} icon={faCaretRight} onClick={moveRight}/>
        </div>
      </div>
  );
};

export default CategoryBar;