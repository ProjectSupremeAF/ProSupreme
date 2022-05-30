import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }

    return req;
});

 export const fetchMarking = () => API.get('/marking');
 export const createMark = (newMark) => API.post('/marking', newMark);
 export const updateMarking = (id, updatedMarking) => API.patch(`/marking/${id}`, updatedMarking);
 export const deleteMarking = (id) => API.delete(`/marking/${id}`);

 export const signIn = (formData) => API.post('/user/signin', formData);
 export const signUp = (formData) => API.post('/user/signup', formData);