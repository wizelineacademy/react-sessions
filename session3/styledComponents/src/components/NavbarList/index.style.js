import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const List = styled.li`
  display: inline;
  position: relative;

  span {
    background: #0088cc;
    bottom: -10px;
    display: block;
    height: 4px;
    left: 10px;
    position: absolute;
    width: calc(100% - 23px);
  }
`;

export const Link = styled(RouterLink)`
  color: #333;
  display: inline-block;
  padding: 10px;
  text-decoration: none;

  :hover {
    color: #0088cc;
  }

  :hover ~ span {
    animation: ul 0.3s ease-out;
    background: #333;
  }
`;
