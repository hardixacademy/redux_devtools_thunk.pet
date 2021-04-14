const defaultState = {
    customers: []
};
const ADD_USER = 'ADD_USER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const REMOVE_USER = 'REMOVE_USER';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MANY_CUSTOMERS':
            return { ...state, customers: [...state.customers, ...action.payload] }
        case 'ADD_USER':
            return { ...state, customers: [...state.customers, action.payload] }
        case 'REMOVE_USER':
            return { ...state, customers: state.customers.filter(el => el.id !== action.payload) }
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({ type: ADD_USER, payload });
export const addManyCustomerAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_USER, payload });