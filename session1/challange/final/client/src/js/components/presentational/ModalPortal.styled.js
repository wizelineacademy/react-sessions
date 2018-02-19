import styled from 'styled-components';

const visible = ({ open }) => open ? 'block' : 'none';

const ModalStyled = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #7C7893;
  background-color: #EEC0DB;
  text-align: center;
  color: #282E53;

  display: ${visible};

  div {
    color: white;
    background-color: black;
    padding: 30px;
    cursor: pointer;
  }

  h2 {
    color: #FA638F;
    text-transform: capitalize;
    font-size: 5em;
    margin-top: 10%;
  }

  span {
    font-size: 14em;
    color: #43A4F2;
  }
`;

export { ModalStyled };
