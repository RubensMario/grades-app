import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://desafio-grades-backend.herokuapp.com/', // http://localhost:8081/
  headers: {
    'Content-type': 'application/json',
  },
});
