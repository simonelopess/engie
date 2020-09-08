import axios from 'axios';


const api = axios.create({
  baseURL: 'https://alanis.sensorweb.com.br/machine_one'
})

export default api;