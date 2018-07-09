import axios from 'axios';
import {ROOT_URL} from './api';

export const getVenues = () => {
    return axios({
        method: 'GET',
        url: ROOT_URL + 'api/venues/',
    });
}
