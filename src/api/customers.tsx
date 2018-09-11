import axios from 'axios';
import {ROOT_URL} from './api';

export const getCustomers = () => {
    return axios({
        method: 'GET',
        url: this.RootUrl() + 'api/customers/',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}
