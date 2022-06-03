import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionTypes";

export default (panels = [], action) =>{
    switch (action.type) {
        case DELETE:
            return panels.filter((panel) => panel._id !== action.payload);
        case UPDATE:
            return panels.map((panel) => panel._id === action.payload._id ? action.payload : panel);
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...panels, action.payload];
        default:
            return panels;
    }
}