import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.li`
	display: inline;
  	position: relative;
`;

export const LineLink = styled.span`
	background:#0088CC;
	bottom:-10px;
	display:block;
	height:4px;
	left:10px;
	position:absolute;
	width:calc(100% - 23px);
`;

export const ListLink = styled(Link)`
	color:#333;
	display:inline-block;
	padding:10px;
	text-decoration:none;
	&:hover{
  		color:#0088CC;
  	}
  	&:hover ~ ${LineLink} {
		animation:ul 0.3s ease-out;
		background:#333;
  	}
`;