import styled, { css } from 'styled-components';

const niceGradient = css`
  background: #22206b;
  background: -moz-linear-gradient(-45deg, #22206b 0%, #4e44a1 100%);
  background: -webkit-linear-gradient(-45deg, #22206b 0%,#4e44a1 100%);
  background: linear-gradient(135deg, #22206b 0%,#4e44a1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#22206b', endColorstr='#4e44a1',GradientType=1 );
`;

const getBackgroundByColor = (color) => {
  return css`background-color: ${color};`;
};

const getBackgroundIfActive = ({ active }) => {
  return active ? getBackgroundByColor('#0bac45') : 'transparent';
};

const getColorIfActive = ({ active }) => {
  return active ? 'white' : 'black';
};

const getCursorIfError = ({ error }) => {
  return error ? 'not-allowed' : 'pointer';
};

const getBackgroundIfError = ({ error }) => {
  return error ? css`
    opacity: 0.3;
    ${getBackgroundByColor('#ec4a5c')}` : 'transparent';
};

const sharedStyle = css`
  border-radius: 3px;
  user-select: none;
  transition: all .3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    background-color: #dee3eb;
  }
`;

const AppStyled = styled.div`
  color: black;
  text-align: center;

  h1 {
    font-size: 25px;
    color: #4e44a1;
    padding: 15px;
    font-size: 30px;
    text-transform: uppercase;
  }
`;

const DataContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 92%;
  padding: 2%;
  margin: 5px 2%;
  background-color: #f2f4f7;
  border: 1px solid #dee3eb;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
`;

const DataTileStyled = styled.div`
  ${sharedStyle}
  width: 120px;
  height: 120px;
  margin: 10px;
  background-color: transparent;
  cursor: ${getCursorIfError};

  h3 {
    padding: 15px;
    text-transform: capitalize;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${getColorIfActive};
  }

  span {
    display: inline-block;
    margin-top: 12%;
    font-size: 15px;
    background: white;
    padding: 10px;
    color: #22206b;
    border-radius: 10px;
  }

  ${getBackgroundIfActive}
  ${getBackgroundIfError}
`;

const MainDataStyled = styled.div`
  ${sharedStyle}
  width: 100%;
  height: 170px;
  font-size: 2em;
  color: #f2f4f7;
  padding: 1%;

  ${niceGradient}

  h2 {
    font-size: 1.1em;
    text-transform: capitalize;
  }

  span {
    font-size: 4em;
  }

  &:hover {
    h2, span {
      color: #dee3eb;
    }
  }
`;

export {
  AppStyled,
  DataContainerStyled,
  DataTileStyled,
  MainDataStyled,
  niceGradient,
};
