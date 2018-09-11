import * as api from '../api/quotes';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';
import {SEARCH_RESULTS_SUCCESS, SEARCH_RESULTS_FAILURE} from '../constants/quotes';

export const quoteSearch = (requestModel: IQuoteSearchModel) => (dispatch:any, getState:any) => {
  
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
          return api.quoteSearch(requestModel).then(
            response => {
              handleResponse(response, 
                (data:any)=> { dispatch(setQuoteSearchResultsSuccess(data)) }, 
                (error:any)=> { dispatch(setQuoteSearchResultsFailure()) })
            }
          );
    //   })
}

const setQuoteSearchResultsSuccess = (data: any) => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SEARCH_RESULTS_SUCCESS,
            data: data
        });
    })
};

const setQuoteSearchResultsFailure = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SEARCH_RESULTS_FAILURE,
            data: []
        });
    })
};
