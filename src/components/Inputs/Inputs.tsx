import React, { useState, useEffect, MouseEventHandler } from 'react'
import './Inputs.scss';

import { ICountry } from '../../App';

import { IoSearch, IoCloseOutline, IoCaretDownOutline } from 'react-icons/io5';

interface IInputs {
	setFiltredCountries: React.Dispatch<React.SetStateAction<ICountry[] | []>>,
	countries: ICountry[];
}

const Inputs: React.FC<IInputs> = ({countries, setFiltredCountries}) => {

	const [input, setInput] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [filterArr] = useState<string[]>([
		'Africa',
		'Americas',
		'Asia',
		'Europe',
		'Oceania',
	])

	function filterByName (e: React.ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
		if (e.target.value.length) {
			const newState = countries.filter(v => {
				if (v.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())) {
					return v
				}
			})
			setFiltredCountries(newState);
		} else {
			setFiltredCountries([])
		}
	}

	function resetInput() {
		setInput('')
		setFiltredCountries([])
	} 

	function filterBy (title:string) {
		const newState = countries.filter(v => v.region === title)
		console.log(title)
		setFiltredCountries(newState)
	}

	function keyboardHandler(e: KeyboardEvent) {
		if (e.key === 'Escape' && isOpen) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', keyboardHandler)
		return () => {
			document.removeEventListener('keydown', keyboardHandler)
		}
	})
	
	return (
		<div className="inputs-wrap">
			<label className='search__input'>
				<IoSearch className='io__search' />
				<input type="text" placeholder='Search for a country...' value={input} onChange={(e) => filterByName(e)}/>
				<IoCloseOutline className={input.length ? 'io__close' : 'io__close hide_close'} onClick={resetInput} />
			</label>

			<div className="filter__wrap">
				<div className="filter__select" onClick={() => setIsOpen(!isOpen)}>
					<div className="filter__title">
						<span>Filter by Region</span>
					</div>
					<div className="filter__icon">
						<IoCaretDownOutline className={isOpen ? 'io__filter__down' : 'io__filter__up'} />
					</div>
				</div>

				<div className="filter__option">
					{
						isOpen 
						? (
							<div className="option__wrap">
								{
									filterArr.map(val => {
										return (
											<div className="option_item" onClick={() => filterBy(val)} key={val}>
												{val}
											</div>
										)
									})
								}
							</div>
						) 
						: ''
					}
				</div>
			</div>
		</div>
	)
}

export default Inputs