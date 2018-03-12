import styled from 'styled-components';
import { niceGradient } from '../container/App.styled';

const visible = ({ open }) => open ? 'block' : 'none';

const ModalStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  text-align: center;
  color: #dee3eb;

  ${niceGradient}

  display: ${visible};

  div {
    color: white;
    background-color: black;
    padding: 30px;
    cursor: pointer;
  }

  h2 {
    color: #dee3eb;
    text-transform: capitalize;
    font-size: 5em;
    margin-top: 10%;
  }

  span {
    font-size: 14em;
    color: #dee3eb;
  }
`;

export { ModalStyled };
