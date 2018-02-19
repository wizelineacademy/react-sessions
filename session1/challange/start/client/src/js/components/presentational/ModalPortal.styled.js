import styled from 'styled-components';

const visible = ({ open }) => open ? 'block' : 'none';

const ModalStyled = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  background-color: #7C7893;
  text-align: center;
  color: #282E53;
  border-radius: 50px;

  display: ${visible};

  div {
    color: white;
    background-color: black;
    padding: 30px;
    cursor: pointer;
  }

  h2 {
    text-transform: capitalize;
    font-size: 5em;
    margin-top: 10%;
  }

  span {
    font-size: 14em;
  }
`;

export { ModalStyled };
