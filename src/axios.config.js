import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/' // remplacer par l'URL de votre API RESTful
});

export default apiClient;