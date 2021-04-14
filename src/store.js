import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { countReducer } from './redux/reducers/countReducer';
import { customerReducer } from './redux/reducers/customerReducer';

const rootReducer = combineReducers({
    count: countReducer,
    customers: customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));