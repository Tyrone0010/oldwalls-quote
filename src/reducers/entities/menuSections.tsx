import {
	GET_VENUE_SECTIONS_SUCCESS, GET_VENUE_SECTIONS_FAILURE
} from '../../constants/menus';
import {updateStateItem} from "../../utilities/reducer";

const INITIAL_STATE:any = [];


const menuSections = (state = INITIAL_STATE, action: any) => {
    let newState: any, actionMenuSections: any;

	switch(action.type){
		  case GET_VENUE_SECTIONS_SUCCESS:
		  //reset state as we want new menu sections as this is dispatched when the venue is changed
		  newState = {};
		  actionMenuSections = action.data || [];
		  Object.keys(actionMenuSections).map(m => updateStateItem(newState, actionMenuSections[m]));
          return newState;
		default:
			return state;
	}
}



export {menuSections}