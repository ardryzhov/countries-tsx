import React, { useState, useEffect } from 'react'
import './CountryCard.scss'

import { ICountry } from '../../App';

import { useNavigate, Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5';

const CountryCard: React.FC<ICountry> = ({ nativeName, name, population, region, subregion, topLevelDomain, currencies, languages, capital, flag, borders }) => {
	const navigate = useNavigate();
	const [neighbors, setNeighbors] = useState<string[] | []>([])

	useEffect(() => {
		if (borders) {
			fetch(`https://restcountries.com/v2/alpha?codes=${borders.join(',')}`)
			.then(data => data.json())
			.then(res => setNeighbors(res.map((r: ICountry) => r.name)))
		}
	}, [borders])

	return (
		<div className="country__card_wrap">

			<div className="card__content">
				<div className="button__back" onClick={() => navigate(-1)}>
					<IoArrowBack className='btn__back_icon'/>
					<button>Back</button>
				</div>

				<div className="country__section">

					<div className="country__section_img">
						<img src={flag} alt={name} />
					</div>

					<div className="country__info">
						<div className="country__info_name">
							<span>{name}</span>
						</div>

						<div className="country__info_about">
							<div className="info__about">
								<span className='info__about_label'>Native Name: </span>
								<span>{nativeName}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Population: </span>
								<span>{population}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Region: </span>
								<span>{region}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Sub Region: </span>
								<span>{subregion}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Capital: </span>
								<span>{capital}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Top Level Domain: </span>
								<span>{topLevelDomain.join(' ')}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Currency: </span>
								<span>{currencies.map(v => v.name)}</span>
							</div>
							<div className="info__about">
								<span className='info__about_label'>Languages: </span>
								<span>{languages.map(v => v.name).join(' ')}</span>
							</div>
						</div>

						<div className="country__info_border">
							<div className="info_border_title">
								<span>Border Countries: </span>
							</div>

							<div className="info_border_array">
								<div className="info__border_links">
								{
									neighbors.length 
									? (
										neighbors.map(n => (
											<Link className='info__border_link' to={`/country/${n.toLowerCase()}`} key={n}>{n}</Link>
										))
									)
									: <span>There is no border countries</span>
								}
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default CountryCard