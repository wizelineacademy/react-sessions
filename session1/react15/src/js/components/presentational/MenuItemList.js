import React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
`;


const MenuItemList = ({ onClick, items, active }) => (
  <UL>
    {
      items.map((item, index) => (
        <MenuItem key={index}
          onClick={() => onClick(item) }
          active={active}
          >
          {item}
        </MenuItem>
      ))
    }
  </UL>
);

export default MenuItemList;
