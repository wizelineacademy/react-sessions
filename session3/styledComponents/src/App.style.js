import { Link } from "react-router-dom"
import styled from "styled-components";

const StyledNav = styled.ul`
    font-family:'Trebuchet MS';
    font-size:17px;
    list-style:none;
    margin-top:20px;
    text-align:center;
`;

const StyledList = styled.li`
    display: inline;
    position: relative;
`;

const StyledLink = styled(Link)`
    color: ${props => props.selected ? "#0088CC" : "#333"};
    display:inline-block;
    padding:10px;
    text-decoration:none;

    &:hover {
        color:#0088CC;
    }

    &:hover ~ .border{
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
`;

const StyleBorder = styled.span`
    background:#0088CC;
    bottom:-10px;
    display:block;
    height:4px;
    left:10px;
    position:absolute;
    width:calc(100% - 23px);
`;

export {
    StyledNav,
    StyledList,
    StyledLink,
    StyleBorder
};