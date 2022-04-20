import { call, put, takeEvery } from 'redux-saga/effects'
import { getCountriesSuccess } from '../countriesSlice'

function* workGetCountriesFetch() {
	const saga = yield call(() => fetch('https://restcountries.com/v2/all?fields=name,nativeName,population,region,subregion,topLevelDomain,currencies,languages,capital,flags,flag,borders'))
	const jsonSaga = yield saga.json();
	yield put(getCountriesSuccess(jsonSaga));
}

function* countriesSaga() {
	yield takeEvery('countries/getCountriesFetch', workGetCountriesFetch);
};

export default countriesSaga;