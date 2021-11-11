import React from 'react';
import style from './Category.module.scss'

const Category = ({category, onSwitchCurCategory, itemSize, isSelected}) => {
  const itemStyle = {
    height: itemSize,
    width: itemSize
  }
  let className = style.categoryBox
  if (isSelected === true)
    className += ' ' + style.selectedItem;

  return (
      <div className={className} style={itemStyle}  onClick = {() => onSwitchCurCategory(category.name)}>
        <img src={category.img}  className={style.categoryImg} alt = {category.name}/>
        <div>{category.name}</div>
      </div>
  );
};

export default Category;