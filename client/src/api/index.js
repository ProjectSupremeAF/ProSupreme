import axios from 'axios';

const url = 'http://localhost:5000/marking';

 export const fetchMarking = () => axios.get(url);
 export const createMark = (newMark) => axios.post(url, newMark);
 