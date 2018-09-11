import {
	GET_VENUE_MENU_ITEMS_SUCCESS, GET_VENUE_MENU_ITEMS_FAILURE
} from '../../constants/menus';
import {updateStateItem} from "../../utilities/reducer";

const INITIAL_STATE:any = [];


const menuItems = (state = INITIAL_STATE, action: any) => {
    let newState: any, actionMenuItems: any;

	switch(action.type){
		  case GET_VENUE_MENU_ITEMS_SUCCESS:
		  //reset state as we want new menu sections as this is dispatched when the venue is changed
		  newState = {};
		  actionMenuItems = action.data || [];
		  Object.keys(actionMenuItems).map(m => updateStateItem(newState, actionMenuItems[m]));
          return newState;
		default:
			return state;
	}
}



export {menuItems}