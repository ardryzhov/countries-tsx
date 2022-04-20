import React, { useState, useEffect } from 'react'
import './CountryPage.scss'

import Header from '../../components/Header/Header'
import CountryCard from '../../components/CountryCard/CountryCard'
import { ICountry, ICountries } from '../../App';
import { getCountriesFetch } from '../../redux/countriesSlice';
import SkeletonCountryCard from '../../components/SkeletonCountryCard/SkeletonCountryCard';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

const CountriesPage: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { country } = useParams();
	const dispatch = useDispatch();

	const state: any = useSelector<ICountries>(state => state.countries);

	const selectedCountry = state.countries.filter((v: ICountry) => {
		return v.name.toLowerCase() === country
	})

	useEffect(() => {
		if (selectedCountry.length) {
			dispatch(getCountriesFetch())
		}
	}, [])

	return (
		<>
			<Header setCurrentPage={setCurrentPage}/>
			{
				!selectedCountry.length
				? <SkeletonCountryCard />
				
				: <CountryCard {...selectedCountry[0]}/>
			}
		</>
	)
}

export default CountriesPage