import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomNavStyled = styled.ul`
  font-family: "Trebuchet MS";
  font-size: 17px;
  list-style: none;
  margin-top: 20px;
  text-align: center;
`;

export const BorderStyled = styled.span`
  background: #0088cc;
  bottom: -10px;
  display: block;
  height: 4px;
  left: 10px;
  position: absolute;
  width: calc(100% - 23px);
`;

export const CustomNavItemStyled = styled.li`
  display: inline;
  position: relative;
`;

export const CustomNavLink = styled(Link)`
  color: #333;
  font-weight: ${props => (props.main ? "700" : "400")};
  display: inline-block;
  padding: 10px;
  text-decoration: none;

  &:hover {
    color: #0088cc;
  }

  &:hover ~ ${BorderStyled} {
    animation: ul 0.3s ease-out;
    background: #333;
  }
`;
