import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import countriesReducer from './countriesSlice';
import countriesSaga from './sagas/countriesSaga';

const saga = createSagaMiddleware();

export default configureStore({
	reducer: {
		countries: countriesReducer
	},
	middleware: [saga]
});

saga.run(countriesSaga);