import * as schemas from '../schemas';
import {normalize} from 'normalizr';
import * as api from '../api/venues';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {GET_VENUES_FAILURE, GET_VENUES_SUCCESS, SELECT_VENUE_SUCCESS} from '../constants/venues';

export const getUserVenues = () => (dispatch:any, getState:any) => {
  
    // return dispatch(getMemberRequest(memberId))
    //   .then(() => {
          return api.getVenues().then(
            response => {
              handleResponse(response, 
                (data:any)=> { dispatch(setGetVenuesSuccess(data)) }, 
                (error:any)=> { dispatch(setGetVenuesFailure(error)) })
            }
          );
    //   })
}

export const setSelectedVenue = (id: number) => (dispatch:any, getState:any) => {
    dispatch(setSelectedVenueSuccess(id));
}

const setGetVenuesSuccess = (data: any) => {
    var normalised = normalize(data, schemas.venues);
    return {
            type: GET_VENUES_SUCCESS,
            data: normalised.result
    };
};

const setGetVenuesFailure = (err:any) => {
    return {
            type: GET_VENUES_FAILURE,
            error: err
        };
};

const setSelectedVenueSuccess = (data: number) => {
    return {
            type: SELECT_VENUE_SUCCESS,
            data: data
    };
};

