import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 25px;
  text-align: center;
  border-bottom: 5px solid lightblue;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ContainerStyled = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Container = ({ title, children }) => (
  <ContainerStyled>
    <H3>{title}</H3>
    {children}
  </ContainerStyled>
);

export default Container;
