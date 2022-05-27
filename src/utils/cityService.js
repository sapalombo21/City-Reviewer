import tokenService from "./tokenService";
const axios = require('axios')

const BASE_URL = "/api/city/";
const API_KEY = process.env.REACT_APP_API_KEY;

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
            'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY,
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

export async function create(city) {
    console.log(city, "city data sent to cityService api")
    
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Authorization" : "Bearer " + tokenService.getToken(),
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(city),
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE TERMINAL')
    })
}

export async function detail(geoDBId) {
    return fetch(BASE_URL + geoDBId, {
        headers: {
            "Authorization" : "Bearer " + tokenService.getToken()
        }
    }).then(res=> {
        if (res.ok) return res.json();
        throw new Error("Bad credentials! Check terminal")
    })
}

export async function getNearby(geoDBId) {
    const options = {
        method: "GET",
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${geoDBId}/nearbyCities`,
        params : {limit: "10", sort: '-population', radius: "100"},
        headers : {
            'X-RapidAPI-Host' : 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY,
        }
    }
    return axios.request(options).then(function (response) {
        console.log(response, "axios response")
        return response.data
    }).catch (function (err) {
        console.log(err)
        return err
    })
}