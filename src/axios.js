import axios from 'axios';

const instence = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instence;