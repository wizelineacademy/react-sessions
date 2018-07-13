import React from 'react';
import { List, Link } from './index.style';

const NavbarList = ({ link }) => {
  const { url, label } = link;
  return (
    <List>
      <Link to={url}>{label}</Link>
      <span />
    </List>
  );
};

export default NavbarList;
