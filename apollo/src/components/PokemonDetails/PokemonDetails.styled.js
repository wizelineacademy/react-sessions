import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
`;

export const Name = styled.strong`
  margin: 20px 0;
`;

export const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;

export const DetailItem = styled.div`
  flex: 50%;
`;

export const DetailsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ExpandButton = styled.button`

`
