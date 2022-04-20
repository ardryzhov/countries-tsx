import React, { useEffect } from 'react';
import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import CountryPage from './pages/CountryPage/CountryPage';
import { getCountriesFetch } from './redux/countriesSlice';

import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';

interface IImageCountry {
	svg: string,
	png: string
}

interface ICurrency {
	code: string,
	name: string,
	symbol: string
}

interface ILanguages {
	name: string,
	nativeName: string
}

export interface ICountry {
	nativeName: string,
	name: string,
	population: number,
	region: string,
	subregion: string,
	topLevelDomain: string[],
	currencies: Array<ICurrency>,
	languages: Array<ILanguages>,
	capital: string,
	flags: IImageCountry,
	flag: string,
	borders: string[]
}

export interface ICountries {
	loading: boolean,
	countries: ICountry[]
}

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountriesFetch())
	}, [])


	return (
		<div className="app-wrap">
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='/country/:country' element={<CountryPage/>} />
				<Route path='*' element={<NotfoundPage/>}/>
			</Routes>
		</div>
	)
}

export default App;
