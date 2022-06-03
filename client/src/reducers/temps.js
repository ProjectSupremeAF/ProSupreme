import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionTypes";

export default (temps = [], action) =>{
    switch (action.type) {
        case DELETE:
            return temps.filter((temp) => temp._id !== action.payload);
        case UPDATE:
            return temps.map((temp) => temp._id === action.payload._id ? action.payload : temp);
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...temps, action.payload];
        default:
            return temps;
    }
}