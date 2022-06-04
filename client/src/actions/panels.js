import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api';

export const getPanels = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPanels();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createPanel = (panel) => async (dispatch) => {
    try {
        const { data } = await api.createPanel(panel);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePanels = (id, panels) => async (dispatch) =>{
    try {
        const {data} = await api.updatePanels(id, panels);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePanels = (id) => async (dispatch) => {
    try {
        await api.deletePanels(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}