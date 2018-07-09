import axios from 'axios';
import {ROOT_URL} from './api';

export const packageSearch = (weddingDate:Date, weddingVenue: number) => {
    return axios({
        method: 'GET',
        url: ROOT_URL + `api/calculatepackage/?weddingdate=${weddingDate}&venue=${weddingVenue}`,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}
