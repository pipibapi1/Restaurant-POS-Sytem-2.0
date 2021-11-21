import React from 'react';
import style from './CategoryMobile.module.scss'
const CategoryMobile = ({ category, onSwitchCurCategory, isSelected }) => {
  return (
      <div className={[style.categoryContainer, isSelected && style.selected].join(' ')} onClick={() => onSwitchCurCategory(category.name)}>
        {category.name}
      </div>
  );
};

export default CategoryMobile;