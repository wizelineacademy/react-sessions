import React from 'react';
import MenuItemList from './MenuItemList';
import styled from 'styled-components';

const Menu = ({ items, onClick, active }) => (
  <MenuItemList items={items} onClick={onClick} active={active} />
);

export default Menu;
