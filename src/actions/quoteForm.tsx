import * as api from '../api/quotes';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';
import {UPDATE_CONTACT} from '../constants/quoteForm';

export const updateCustomer = (firstName: string, lastName: string) => (dispatch:any, getState:any) => {
    dispatch(setUpdateCustomer({firstName, lastName}));
}

const setUpdateCustomer = (data: any) => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: UPDATE_CONTACT,
            data: data
        });
    })
};

