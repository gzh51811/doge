import axios from 'axios';
export function getData(params){
    return axios(
        params
    )
} 