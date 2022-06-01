import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionTypes";

export default (subs = [], action) =>{
    switch (action.type) {
        case DELETE:
            return subs.filter((sub) => sub._id !== action.payload);
        case UPDATE:
            return subs.map((sub) => sub._id === action.payload._id ? action.payload : sub);
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...subs, action.payload];
        default:
            return subs;
    }
}