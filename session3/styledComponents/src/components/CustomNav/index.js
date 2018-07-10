import React from "react";
import {
  CustomNavStyled,
  CustomNavItemStyled,
  CustomNavLink,
  BorderStyled
} from "./CustomNav.styled";

const CustomNav = ({ links }) => {
  return (
    <CustomNavStyled>
      {links.map(({ url, label }, index) => (
        <CustomNavItemStyled key={url}>
          <CustomNavLink to={url} main={index === 0}>
            {label}
          </CustomNavLink>
          <BorderStyled />
        </CustomNavItemStyled>
      ))}
    </CustomNavStyled>
  );
};

export default CustomNav;
