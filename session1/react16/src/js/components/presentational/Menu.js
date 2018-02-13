import React from 'react';
import MenuItemList from './MenuItemList';
import styled from 'styled-components';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
`;

const Menu = ({ items, onClick, active }) => (
  <UL>
    <MenuItemList items={items} onClick={onClick} active={active} />
  </UL>
);

export default Menu;
