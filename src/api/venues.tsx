import axios from 'axios';
import {ROOT_URL} from './api';

export const getVenues = (clientId: Number) => {
    return axios({
        method: 'GET',
        url: this.RootUrl() + 'api/venues/' + clientId,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}
