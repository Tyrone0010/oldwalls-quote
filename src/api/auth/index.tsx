import axios from 'axios';
import {ROOT_URL} from '../api';

export const signIn = (userName: string, password: string) => {
    return axios({
        method: 'POST',
        url: this.RootUrl() + 'token/',
        data: {userName, password},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}
