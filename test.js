const axios = require('axios');

const url = 'http://rickandmortyapi.com/api/character';

axios.get(url).then(res =>{
    console.log(res.data);
}).catch(err => {
    console.log(err);
})