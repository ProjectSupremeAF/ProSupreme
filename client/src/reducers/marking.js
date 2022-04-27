// eslint-disable-next-line import/no-anonymous-default-export
export default (marking = [], action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...marking, action.payload];
        default:
            return marking;
    }
}