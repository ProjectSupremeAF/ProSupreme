import * as api from '../api';

//Actions
export const getMarking = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMarking();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createMark = (mark) => async (dispatch) => {
    try {
        const { data } = await api.createMark(mark);
        dispatch({ type: 'CREATE', payload:data});
    } catch (error) {
        console.log(error);
    }
}