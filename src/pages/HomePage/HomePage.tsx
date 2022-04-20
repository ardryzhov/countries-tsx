import React, { useState } from 'react';
import './HomePage.scss';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { ICountry, ICountries } from '../../App';

import { useSelector } from 'react-redux';

export interface IMainProp {
	countries: ICountry[],
	loading: boolean,
	currentPage: number,
	countriesPerPage: number,
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export interface IHeaderProp {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const HomePage: React.FC = () => {

	const state: any = useSelector<ICountries>(state => state.countries);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [countriesPerPage] = useState<number>(16);

	const countries = state.countries;
	const loading = state.loading;

	return (
		<>
			<Header setCurrentPage={setCurrentPage}/>
			<Main 
			countries={countries}
			loading={loading}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
			countriesPerPage={countriesPerPage} />
		</>
	)
}

export default HomePage