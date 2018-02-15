import styled from 'styled-components';

const SAD_CAT_IMAGE_SRC = 'http://cutecatshq.com/wp-content/uploads/2014/09/Sad-Cat.jpg';

const TileStyled = styled.div`
  display: inline-block;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: 1px solid #424C6D;
  transition: all .3s;
  background-color: ${({ color }) => color};
  color: white;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
  user-select: none;

  &:hover {
    background-color: black;
  }

  span {
    padding-top: 5px;
    display: block;
  }
`;

const ErrorTileStyled = styled.div`
  background: url(${SAD_CAT_IMAGE_SRC});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 750px;
`;

export {
  TileStyled,
  ErrorTileStyled,
}
