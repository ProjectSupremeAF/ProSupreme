import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

export const getTemps = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTemps();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createTemp = (temp) => async (dispatch) => {
    try {
        const { data } = await api.createTemp(temp);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateTemps = (id, temps) => async (dispatch) =>{
    try {
        const {data} = await api.updateTemps(id, temps);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTemps = (id) => async (dispatch) => {
    try {
        await api.deleteTemps(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}