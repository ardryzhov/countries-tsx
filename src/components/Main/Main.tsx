import React, { useState } from 'react';
import './Main.scss';

import Inputs from '../Inputs/Inputs'
import Country from '../Country/Country';
import { ICountry } from '../../App';
import { IMainProp } from '../../pages/HomePage/HomePage';
import SkeletonCountry from '../SkeletonCountry/SkeletonCountry';

import Pagination from '../Pagination/Pagination';


const Main: React.FC<IMainProp> = ({countries, loading, currentPage, countriesPerPage, setCurrentPage}) => {

	const [filtredCountries, setFiltredCountries] = useState<ICountry[] | []>([])

	const lastCountryIndex = currentPage * countriesPerPage;
	const firstCountryIndex = lastCountryIndex - countriesPerPage;
	const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)

	const skeletonCountries = [];
	for (let i = 1; i <= countriesPerPage; i++) {
		skeletonCountries.push(i)
	}

	const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

	return (
		<div className="main-wrap">
			<main className="main__content">
				<Inputs 
				countries={countries}
				setFiltredCountries={setFiltredCountries}/>

				<div className="countries__wrap">
					{
						loading 
						? (skeletonCountries.map((v, i) => (<SkeletonCountry key={i} />)))
						: filtredCountries.length 
						? (filtredCountries.map((val:ICountry) =>(
								<Country key={val.name} {...val} />))) 
						: (currentCountries.map((val:ICountry) => (
								<Country key={val.name} {...val} />)))
					}
				</div>
				
				<Pagination countriesPerPage={countriesPerPage} totalPage={countries.length} paginate={paginate}/>
			</main>
		</div>
	)
}

export default Main