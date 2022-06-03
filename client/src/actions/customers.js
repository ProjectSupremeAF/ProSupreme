import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCustomers();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createCustomer = (customer) => async (dispatch) => {
    try {
        const { data } = await api.createCustomer(customer);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateCustomers = (id, customers) => async (dispatch) =>{
    try {
        const {data} = await api.updateCustomers(id, customers);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCustomers = (id) => async (dispatch) => {
    try {
        await api.deleteCustomers(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}