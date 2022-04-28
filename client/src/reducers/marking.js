// eslint-disable-next-line import/no-anonymous-default-export
export default (marking = [], action) =>{
    switch (action.type) {
        case 'DELETE':
            return marking.filter((marks) => marks._id !== action.payload);
        case 'UPDATE':
            return marking.map((marks) => marks._id === action.payload._id ? action.payload : marks);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...marking, action.payload];
        default:
            return marking;
    }
}

