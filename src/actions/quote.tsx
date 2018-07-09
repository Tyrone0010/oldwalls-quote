import * as api from '../api/quotes';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {ADD_CUSTOMER, ADD_CUSTOMER_ADDRESS} from '../constants/quote';
import {IQuoteForm} from '../interfaces/IQuoteForm'

export const addCustomer = (firstName:string, middleNames:string, surname:string) => (dispatch:any, getState:any) => {
  
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
            dispatch(addCustomerDispatch(firstName, middleNames, surname)); 
    //   })
}

export const addCustomerAddress = (customerAddress:IQuoteForm) => (dispatch:any, getState:any) => {
  
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
            dispatch(addCustomerAddressDispatch(customerAddress)); 
    //   })
}

const addCustomerDispatch = (firstName:string, middleNames:string, surname:string) => {
    return {
        type: ADD_CUSTOMER,
        customer: {
            firstName: firstName,
            middleNames: middleNames,
            surname: surname
        }
    };
};

const addCustomerAddressDispatch = (customerAddress: IQuoteForm) => {
    return {
        type: ADD_CUSTOMER_ADDRESS,
        customerAddress: customerAddress
    };
};