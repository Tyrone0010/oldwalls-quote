import * as api from '../api/package';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';
import {IChosenPackageAction, IChosenPackage} from '../interfaces/IChosenPackage';
import {getSelectedVenue} from '../reducers/venueList'
import {CHOSEN_PACKAGE_FAILURE, CHOSEN_PACKAGE_SUCCESS, CHOSEN_PACKAGE_LOADING} from '../constants/chosenPackage';

export const calculatePackage = (weddingDate: Date) => (dispatch:any, getState:any) => {
    
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
          var selectedVenue = getSelectedVenue(getState());
          return api.packageSearch(weddingDate, selectedVenue).then(
            response => {
              handleResponse(response, 
                (data:any)=> { dispatch(setPackageSearchResultsSuccess(data)) }, 
                (error:any)=> { dispatch(setPackageSearchResultsFailure()) })
            }
          );
    //   })
}

//Todo: Why does the promise not reolve to a plain object??
const setPackageSearchResultsSuccess = (data: IChosenPackage) => {
    var returnVal = new Promise((resolve:any) => {
        resolve({
            type: CHOSEN_PACKAGE_SUCCESS,
            data: data
        });
    })

    return {
        type: CHOSEN_PACKAGE_SUCCESS,
        data: data
    };
};

const setPackageSearchResultsFailure = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: CHOSEN_PACKAGE_FAILURE,
            data: null
        });
    })
};
