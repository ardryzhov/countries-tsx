import React from 'react'
import './Pagination.scss'

import { Link } from 'react-router-dom'

interface IPagination {
	countriesPerPage: number,
	totalPage: number,
	paginate: (n: number) => void
}

const Pagination: React.FC<IPagination> = ({ countriesPerPage, totalPage,paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPage / countriesPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<ul className='pagination'>
			{
				pageNumbers.map((item:number) => {
					return (
						<li className="page__item" key={item} onClick={() => paginate(item)}>
							<Link to="/">{item}</Link>
						</li>
					)
				})
			}
		</ul>
	)
}

export default Pagination