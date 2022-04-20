import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
	name: 'countries',
	initialState: {
		countries: [],
		loading: false 
	},
	reducers: {
		getCountriesFetch(state) {
			state.loading = true
		},
		getCountriesSuccess(state, action) {
			state.loading = false
			state.countries = [...action.payload];
		},
		getCountriesFalse(state) {
			state.loading = false
			console.log('Oops! Something go wrong...')
		},
	}
});

export const { getCountriesFetch, getCountriesSuccess, getCountriesFalse } = countriesSlice.actions
export default countriesSlice.reducer