import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../redux/asyncActions/customers';
import { addCashAction, withdrawCashAction } from '../redux/reducers/countReducer';
import { addCustomerAction, removeCustomerAction } from '../redux/reducers/customerReducer';

function HomePage() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.count.cash);
    const customers = useSelector(state => state.customers.customers);

    const withdrawCash = (num) => {
        dispatch(withdrawCashAction(num))
    }
    const addCash = (num) => {
        dispatch(addCashAction(num))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }
    const addCustomer = (name) => {
        dispatch(addCustomerAction({ id: Date.now(), name }))
    }

    return (
        <div className='app'>
            <h4>Cash: {cash} </h4>

            <div className="app__actions">
                <button onClick={() => withdrawCash(Number(prompt()))}>withdraw</button>
                <button onClick={() => addCash(Number(prompt()))}>add</button>
                <button onClick={() => addCustomer(prompt())}>add user</button>
                <button onClick={() => dispatch(fetchCustomers())}>users from base</button>
            </div>

            <div>
                {customers.length > 0 ?
                    customers.map(obj => (
                        <div className='app__item' key={obj.id}>
                            name: {obj.name}<br />
                            <button onClick={() => removeCustomer(obj)}>remove user</button>
                        </div>
                    ))

                    :
                    <h4>No customers</h4>
                }
            </div>
        </div>
    )
}

export default HomePage
