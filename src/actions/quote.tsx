import * as api from '../api/quotes';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {ADD_CUSTOMER} from '../constants/quote';
import {CALCULATE_QUOTE_FAILURE, CALCULATE_QUOTE_REQUEST, CALCULATE_QUOTE_SUCCESS} from '../constants/quoteForm';
import {IQuoteForm} from '../interfaces/IQuoteForm'
import { ICalculateQuoteModel, CalculateQuoteModel} from '../interfaces/requestTypes/ICalculateQuoteModel';
import promiseMiddleware from '../../node_modules/@types/redux-promise-middleware';
import { resolve } from 'path';
import {toastr} from 'react-redux-toastr'

export const addCustomer = (firstName:string, middleNames:string, surname:string) => (dispatch:any, getState:any) => {
  
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
            dispatch(addCustomerDispatch(firstName, middleNames, surname)); 
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

export const calculateQuote = (callbackFn: any) => (dispatch:any, getState:any) => { 
    var requestModel = new CalculateQuoteModel();
    var state = getState();
    requestModel.AdultNumbers = state.quoteForm.adultNumbers;
    requestModel.ChildNumbers = state.quoteForm.childNumbers;
    requestModel.EveningNumbers = state.quoteForm.eveningNumbers;
    requestModel.TeenNumbers = state.quoteForm.teenNumbers;
    requestModel.VenueId = state.venueList.selectedVenue;
    requestModel.WeddingDate = state.chosenPackage.date;
    Object.keys(state.selectedMenuList.selectedMenus).map((key, index) => {
        requestModel.MenuSections.push(state.selectedMenuList.selectedMenus[key].sectionId);
    })

    return setCalculateQuoteRequestDispatcher(dispatch).then(() => {
          return api.calculateQuote(requestModel).then(
            response => {
              handleResponse(response, 
                (data:any) => { 
                    setCalculateQuoteSuccessDispatcher(dispatch, data).then(
                        () => {
                            callbackFn();
                        }),
                        () => {
                            toastr.error('Quote Calculation Failure', 'The quote calculation failed dur to an unknown error.')
                        }
                }, 
                (error:any)=> { dispatch(setCalculateQuoteFailureDispatcher(error)) })
            }
          );
      })
}

const setCalculateQuoteRequestDispatcher = (dispatch:any) => {
    return new Promise((resolve, reject) => {
        dispatch({type: CALCULATE_QUOTE_REQUEST});
        resolve();
      });
    };

const setCalculateQuoteSuccessDispatcher = (dispatch:any, data: any) => {
    return new Promise((resolve, reject) => {
        dispatch({type:CALCULATE_QUOTE_SUCCESS, data:data}).then(resolve())
    })
};

const setCalculateQuoteFailureDispatcher = (error: any) => {
    return {
            type: CALCULATE_QUOTE_FAILURE,
            data: ''
    };
};



