import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

//Actions
export const getMarking = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMarking();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createMark = (mark) => async (dispatch) => {
    try {
        const { data } = await api.createMark(mark);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateMarking = (id, marks) => async (dispatch) =>{
    try {
        const {data} = await api.updateMarking(id, marks);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteMarking = (id) => async (dispatch) => {
    try {
        await api.deleteMarking(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}