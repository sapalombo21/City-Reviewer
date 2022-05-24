import tokenService from "./tokenService";
const axios = require('axios')

const BASE_URL = "/";

export async function getAll() {
    return fetch(BASE_URL, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! Check Server Terminal')
    })
}

export async function search(params) {
    const options = {
        method : 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {limit: '10', namePrefix: params, sort: '-population'},
        headers: {
            'X-RapidAPI-Host' : 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key' : 'b7ac1adda7mshc1c3109df8bc17bp1cee70jsnee366e39337d'
        }
    }
    return axios.request(options).then(function (response) {
        console.log(response, "response data")
        return response.data
    }).catch(function (error) {
        console.log(error, "error")
        return error
    })
}