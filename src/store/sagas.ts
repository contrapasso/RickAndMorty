import { all } from 'redux-saga/effects';
import saga from './sagas/character';

export default function* rootSaga() {
    yield all([
        saga()
    ]);
}
