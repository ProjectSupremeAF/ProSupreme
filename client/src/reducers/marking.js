import { FETCH_ALL, UPDATE, CREATE, DELETE, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (marking = [], action) =>{
    switch (action.type) {
        case DELETE:
            return marking.filter((marks) => marks._id !== action.payload);
        case UPDATE:
            return marking.map((marks) => marks._id === action.payload._id ? action.payload : marks);
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_SEARCH:
            return action.payload;
        case CREATE:
            return [...marking, action.payload];
        default:
            return marking;
    }
}

