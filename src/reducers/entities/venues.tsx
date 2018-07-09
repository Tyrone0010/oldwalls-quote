import {
	GET_VENUES_SUCCESS, GET_VENUES_FAILURE
} from '../../constants/venues';
import {updateStateItem} from "../../utilities/reducer";

const INITIAL_STATE:any = [];

const venues = (state = INITIAL_STATE, action: any) => {
    let newState: any, actionVenues: any;

	switch(action.type){
  		case GET_VENUES_SUCCESS:
		  newState = [];
		  actionVenues = action.data || [];
		  Object.keys(actionVenues).map(m => updateStateItem(newState, actionVenues[m]));
          return newState;
		default:
			return state;
	}
}


export {venues}