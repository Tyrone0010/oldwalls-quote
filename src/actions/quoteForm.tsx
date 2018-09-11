import * as api from '../api/quotes';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';
import {UPDATE_CONTACT, UPDATE_QUOTE_FORM_FIELD} from '../constants/quoteForm';

export const updateCustomer = (firstName: string, lastName: string) => (dispatch:any, getState:any) => {
    dispatch(setUpdateCustomer({firstName, lastName}));
}

export const updateFormField = (fieldName: string, fieldValue: string) => (dispatch:any, getState:any) => {
    dispatch(setUpdateQuoteFormField(fieldName, fieldValue));
}


const setUpdateCustomer = (data: any) => {
    return {
            type: UPDATE_CONTACT,
            data: data
        }
};

const setUpdateQuoteFormField = (fieldName: string, fieldValue: string) => {
    return {
            type: UPDATE_QUOTE_FORM_FIELD,
            fieldName: fieldName, 
            fieldValue: fieldValue
        };
};


