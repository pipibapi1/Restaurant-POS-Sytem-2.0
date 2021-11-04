import React from 'react';
import style from './Category.module.scss'

const Category = ({category, onSwitchCurCategory}) => {
  return (
      <div className={style.categoryBox} onClick = {() => onSwitchCurCategory(category.name)}>
        <div className={style.categoryImgHolder}>
          <img src={category.img} className={style.categoryImg} alt = {category.name}/>
        </div>
        {category.name}
      </div>
  );
};

export default Category;