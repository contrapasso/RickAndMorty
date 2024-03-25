import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CHARACTERS } from '../actions/character';
import { getCharactersErrorAction, getCharactersSuccessAction } from '../actionCreators/character';
import { Connector } from '@/serviceConnectors/connector';
import { Result } from '@/types/result';
import { Character } from '@/types/character';

export default function* rootSaga() {
    yield all([
        fork(watchGetCharacters),
    ]);
}

function* watchGetCharacters() {
    yield takeLatest(
        GET_CHARACTERS, getCharacters
    );
}

function* getCharacters(action: any) {
    try {
        const response: Result<Character> = yield call(getCharactersAsync, action);
        yield put(getCharactersSuccessAction(response));
    } catch (error) {
        yield put(getCharactersErrorAction(error));
    }
}

const getCharactersAsync = async (action: any) => {
    return Connector.GetCharacters(action.payload);
};