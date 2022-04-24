import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { WatcherSaga } from './Saga';

const initialState = {
    user: []
}
const Reducer = (state = initialState, action) => {

    if (action.type === "SET_USER") {
        const user  = action
        return {...state, user}
    }

    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(WatcherSaga);

export default store;
