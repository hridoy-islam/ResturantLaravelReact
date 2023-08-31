import axios from 'axios';
const token = localStorage.getItem('fitnesstoken');
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;