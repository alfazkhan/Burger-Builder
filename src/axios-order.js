import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://burger-builder-da4b4.firebaseio.com/'
    
});

export default instance;