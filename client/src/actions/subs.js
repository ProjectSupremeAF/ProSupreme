import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

export const getSubs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubs();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createSub = (sub) => async (dispatch) => {
    try {
        const { data } = await api.createSub(sub);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateSubs = (id, subs) => async (dispatch) =>{
    try {
        const {data} = await api.updateSubs(id, subs);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteSubs = (id) => async (dispatch) => {
    try {
        await api.deleteSubs(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}