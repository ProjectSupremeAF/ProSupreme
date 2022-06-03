import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }

    return req;
});
 

 export const fetchMarking = () => API.get('/marking');
 export const fetchMarksBySearch = (searchQuery) => API.get(`/marking/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
 export const createMark = (newMark) => API.post('/marking', newMark);
 export const updateMarking = (id, updatedMarking) => API.patch(`/marking/${id}`, updatedMarking);
 export const deleteMarking = (id) => API.delete(`/marking/${id}`);

 export const fetchSubs = () => API.get('/subs');
 export const createSub = (newSub) => API.post('/subs', newSub);
 export const updateSubs = (id, updateSubs) => API.patch(`/subs/${id}`, updateSubs);
 export const deleteSubs = (id) => API.delete(`/subs/${id}`);

 export const fetchTemps = () => API.get('/temps');
 export const createTemp = (newTemp) => API.post('/temps', newTemp);
 export const updateTemps = (id, updateTemps) => API.patch(`/temps/${id}`, updateTemps);
 export const deleteTemps = (id) => API.delete(`/temps/${id}`);

 export const fetchPanels = () => API.get('/panels');
 export const createPanel = (newPanel) => API.post('/panels', newPanel);
 export const updatePanels = (id, updatePanels) => API.patch(`/panels/${id}`, updatePanels);
 export const deletePanels = (id) => API.delete(`/panels/${id}`);

 export const signIn = (formData) => API.post('/user/signin', formData);
 export const signUp = (formData) => API.post('/user/signup', formData);