import { combineReducers } from 'redux';
import { character } from './reducers/character';

const reducers = combineReducers({
    character,
});

export type IRootState = ReturnType<typeof reducers>
export default reducers;
