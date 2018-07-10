import React from "react";
import { Link } from "react-router-dom";
import {
  CustomNavStyled,
  CustomNavItemStyled,
  BorderStyled
} from "./CustomNav.styled";

const CustomNav = ({ links }) => {
  return (
    <CustomNavStyled>
      {links.map(({ url, label }, index) => (
        <CustomNavItemStyled key={url} main={index === 0}>
          <Link to={url}>{label}</Link>
          <BorderStyled />
        </CustomNavItemStyled>
      ))}
    </CustomNavStyled>
  );
};

export default CustomNav;
