import React from 'react';
import MenuItem from './MenuItem';

const MenuItemList = ({ onClick, items, active }) => (
  items.map((item, index) => (
    <MenuItem key={index}
      onClick={() => onClick(item) }
      active={active}
    >
      {item}
    </MenuItem>
  ))
);

export default MenuItemList;
