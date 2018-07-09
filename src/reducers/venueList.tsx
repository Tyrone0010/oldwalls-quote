import { combineReducers } from 'redux';
import { 
    GET_VENUES_SUCCESS,GET_VENUES_FAILURE,GET_VENUES_LOADING, RESET_VENUES, SELECT_VENUE_SUCCESS
} from '../constants/Venues';


const isFetching = (state = false, action:any) => {
    switch(action.type){
        case GET_VENUES_LOADING:
            return true;

        case GET_VENUES_SUCCESS:
        case GET_VENUES_FAILURE:
            return false;

        default:
            return state;
    }
};

const selectedVenue = (state = -1, action: any) => {
	
	switch(action.type){
		case SELECT_VENUE_SUCCESS:
            var newState = state;
            newState = action.data;
            return newState;
        case RESET_VENUES:
            return -1;
        default:
            return state;
	}
}

export default combineReducers({
    selectedVenue,
    isFetching
});

export const getIsFetchingMenus = (state: any) => state.isFetching;
export const getSelectedVenue = (state: any) => state.venueList.selectedVenue;
