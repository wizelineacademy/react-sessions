import styled from 'styled-components';

export const EvilDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80px;
  background-color: pink;
  border: 1px dotted lightgrey;
`;

export const ModalStyled = styled.div`
  height: 150px;
  width: 250px;
  margin: 0 auto;
  border: 5px solid black;
  background: white;

  display: ${({ open }) => open ? 'block' : 'none' };

  h4 {
    color: white;
    font-size: 30px;
    text-align: center;
    background: black;
    padding: 15px 0;
    cursor: pointer;
  }

  p {
    padding: 5px;
  }
`;

export const ButtonStyled = styled.button`
  background-color: red;
  color: white;
  padding: 15px;
  font-size: 14px;
`;
