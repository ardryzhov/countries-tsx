import React from 'react'
import './Country.scss';

import { ICountry } from '../../App';

import { Link } from 'react-router-dom';

const Country: React.FC<ICountry> = ({name, population, region, capital, flags}) => {

	return (
		<Link to={`/country/${name.toLowerCase()}`} className="country__wrap">
			<div className="country__image">
				<img src={flags.png} alt={name} />
			</div>

			<div className="country__section">

				<div className="country__title">
					<span>{name}</span>
				</div>

				<div className="country__info">
					<div className="country__info_container">
						<span className='info__title'>Population: </span> <span>{population.toLocaleString()}</span>
					</div>
					<div className="country__info_container">
						<span className='info__title'>Region: </span> <span>{region}</span>
					</div>
					<div className="country__info_container">
						<span className='info__title'>Capital: </span> <span>{capital}</span>
					</div>
				</div>

			</div>
		</Link>
	)
}

export default Country