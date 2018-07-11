import styled from "styled-components";

export const Image = styled.img`
  flex: 1;
  object-fit: contain;
  width: 30%;
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
  span + span {
    margin-left: 5px;
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 33%;
  min-width: 300px;
  height: 300px;
  transition: all ease 200ms;
  &:hover {
    ${Image} {
      transform: translateY(-20px) scale(1.1);
    }
  }
`;
