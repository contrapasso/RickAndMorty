import { Tuple, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: () => new Tuple(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export default store;