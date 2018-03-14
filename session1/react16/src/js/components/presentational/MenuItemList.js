import React from 'react';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

const MenuItemList = ({items, active}) => {
  return items.map((item, index) => (
    <NavLink 
      key={index} 
      to={`/${item.replace(/ /g, '_')}`}
      activeClassName='active'
      style={{
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      <MenuItem active={active}>
        {item}
      </MenuItem>
    </NavLink>
  ));
};

export default MenuItemList;
