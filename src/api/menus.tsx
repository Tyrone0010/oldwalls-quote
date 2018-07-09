import axios from 'axios';
import {ROOT_URL} from './api';

export const getVenuMenus = (venueId: number) => {
    return axios({
        method: 'GET',
        url: ROOT_URL + 'api/venuemenus/' + venueId,
        headers: {'Content-Type': 'application/json'}
    });
}
export const getVenueSections = (venueId: number) => {
    return axios({
        method: 'GET',
        url: ROOT_URL + 'api/venuesections/' + venueId,
        headers: {'Content-Type': 'application/json'}
    });
}
export const getVenueMenuItems = (venueId: number) => {
    return axios({
        method: 'GET',
        url: ROOT_URL + 'api/venuemenuitems/' + venueId,
        headers: {'Content-Type': 'application/json'}
    });
}
