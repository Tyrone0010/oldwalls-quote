import {
	GET_VENUE_MENUS_FAILURE, GET_VENUE_MENUS_SUCCESS
} from '../../constants/menus';
import {updateStateItem} from "../../utilities/reducer";

const INITIAL_STATE:any = [];


const menus = (state = INITIAL_STATE, action: any) => {
    let newState: any, actionMenus: any;

	switch(action.type){
		  case GET_VENUE_MENUS_SUCCESS:
		  //reset state as we want new menus
		  newState = {};
		  actionMenus = action.data || [];
		  Object.keys(actionMenus).map(m => updateStateItem(newState, actionMenus[m]));
          return newState;
		default:
			return state;
	}
}



export {menus}