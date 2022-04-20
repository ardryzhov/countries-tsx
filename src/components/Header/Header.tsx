import React from 'react'
import './Header.scss';

import { IHeaderProp } from '../../pages/HomePage/HomePage';

import { Link } from 'react-router-dom';

const Header: React.FC<IHeaderProp> = ({setCurrentPage}) => {

	const toFirstPage = () => {
		setCurrentPage(1);
	}

	return (
		<div className="header-wrap">
			<header className="header__content">
				<Link to='/' onClick={toFirstPage}> Where is the world?</Link>
			</header>
		</div>
	)
}

export default Header