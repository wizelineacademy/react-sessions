import styled from "styled-components";

const NavStyled = styled.ul`
  font-family: "SoberanaSans";
  font-size: 17px;
  list-style: none;
  margin-top: 20px;
  text-align: center;
`;

const BorderStyled = styled.span`
  background: #0088cc;
  bottom: -10px;
  display: block;
  height: 4px;
  left: 10px;
  position: absolute;
  width: calc(100% - 23px);
`;

const LinkStyled = styled.li`
  display: inline;
  position: relative;

  & > a {
    color: ${props => (!props.selected ? "#333" : "#0088cc")};
    display: inline-block;
    padding: 10px;
    text-decoration: none;
  }

  & > a:hover {
    color: #0088cc;
  }

  & > a:hover ~ ${BorderStyled} {
    animation: ul 0.3s ease-out;
    background: #333;
  }

  @keyframes ul {
    0% {
      width: 0;
    }
    100% {
      width: calc(100% - 23px);
    }
  }
`;

export { NavStyled, LinkStyled, BorderStyled };
