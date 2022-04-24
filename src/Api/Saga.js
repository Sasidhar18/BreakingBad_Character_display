import { put, takeLatest, call } from "@redux-saga/core/effects";
import axios from "axios";

function getUser() {
    return axios.request({
        method: "GET",
        url: 'https://www.breakingbadapi.com/api/characters'
    })
}

function* handleUser() {
    const response = yield call(getUser);
    const  data  = response.data;
    yield put({ type: "SET_USER", user: data })
}

export function* WatcherSaga() {
    yield takeLatest("GET_USER", handleUser)
}