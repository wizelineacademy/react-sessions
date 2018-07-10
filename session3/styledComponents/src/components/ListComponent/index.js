import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListLink, LineLink } from './ListComponent.style';

const ListComponent = (props) => {
	const { link } = props;
	return (
		<List className='' key={link.url}>
			<ListLink to={link.url}>{link.label}</ListLink>
			<LineLink />
		</List>
	)
};

export default ListComponent;