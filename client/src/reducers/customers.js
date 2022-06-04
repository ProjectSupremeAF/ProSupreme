import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionTypes";

export default (customers = [], action) =>{
    switch (action.type) {
        case DELETE:
            return customers.filter((customer) => customer._id !== action.payload);
        case UPDATE:
            return customers.map((customer) => customer._id === action.payload._id ? action.payload : customer);
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...customers, action.payload];
        default:
            return customers;
    }
}