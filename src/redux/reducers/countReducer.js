const defaultState = {
    cash: 0
};
const ADD_CASH = 'ADD_CASH';
const WITHDRAW_CASH = 'WITHDRAW_CASH';

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CASH':
            return { ...state, cash: state.cash + action.payload }
        case 'WITHDRAW_CASH':
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
export const withdrawCashAction = (payload) => ({ type: WITHDRAW_CASH, payload });