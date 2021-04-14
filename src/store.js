import { createStore, combineReducers } from 'redux';
import homeReducer from './redux/reducers';

const reducers = combineReducers({
    homePage
});

export default createStore(reducers);