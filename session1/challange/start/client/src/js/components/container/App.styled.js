import styled, { css } from 'styled-components';

const getBackground = ({ loading }) => {
  const color = loading ? '#7F7996' : '#43A4F2';
  return css`background-color: ${color}`;
}

const getBackgroundByColor = (color) => {
  return css`background-color: ${color};`;
}

const getBackgroundIfActive = ({ active }) => {
  return active ? getBackgroundByColor('#FA638F') : null;
}

const getBackgroundIfError = ({ error }) => {
  return error ? css`
    opacity: 0.3;
    ${getBackgroundByColor('#7F7996')}` : null;
}

const sharedStyle = css`
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  user-select: none;
  transition: all .3s;
  cursor: pointer;
`;

const AppStyled = styled.div`
  color: white;
  text-align: center;

  h1 {
    font-size: 30px;
    padding: 15px;
    font-size: 30px;
    text-transform: uppercase;
  }
`
const DataContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DataTileStyled = styled.div`
  ${sharedStyle}
  width: 250px;
  height: 250px;
  margin: 10px;
  ${getBackground};

  h3 {
    border-bottom: 3px solid black;
    padding: 15px;
    text-transform: uppercase;
  }

  span {
    display: inline-block;
    margin-top: 30%;
    font-size: 20px;
  }


  &:hover {
    background-color: #FEE06F;
  }

  ${getBackgroundIfActive}
  ${getBackgroundIfError}
`;

const MainDataStyled = styled.div`
  ${sharedStyle}
  width: 90%;
  height: 200px;
  font-size: 2em;

  h2 {
    font-size: 1.1em;
    color: #FA638F;
    text-transform: capitalize;
  }

  &:hover {
    h2 {
      color: #43A4F2;
    }

    span {
      color: #FA638F;
    }
  }

  span {
    font-size: 4em;
    color: #43A4F2;
  }
`;

export {
  AppStyled,
  DataContainerStyled,
  DataTileStyled,
  MainDataStyled,
};
