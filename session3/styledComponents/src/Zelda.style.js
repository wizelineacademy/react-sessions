import styled from 'styled-components';

export const StyledZelda = styled.li`
  display:inline;
  position:relative;

  a {
    color:#333;
    display:inline-block;
    padding:10px;
    text-decoration:none;
  }

  &.selected a {
    color:#0088CC;
  }

  .border {
    background:#0088CC;
    bottom:-10px;
    display:block;
    height:4px;
    left:10px;
    position:absolute;
    width:calc(100% - 23px);
  }

  & a:hover {
    color:#0088CC;
  }

  & a:hover ~ .border{
    animation:ul 0.3s ease-out;
    background:#333;
  }

  @keyframes ul {
    0% { 
      width:0;
    }
    100% { 
      width:calc(100% - 23px);
    }
  }
`;
