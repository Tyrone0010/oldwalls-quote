import { combineReducers } from 'redux';
import {SET_SELECTED_MENUS, SET_SELECTED_MENU, RESET_ALL_MENUS} from '../constants/menus';

const INITIAL_STATE:any = {};

const selectedMenus = (state = INITIAL_STATE, action:any) => {
    switch(action.type){
        case SET_SELECTED_MENUS:
            var newState:any = {};
            Object.keys(state).map((item)=> {
                //remove a section if the new action has the same menu id
                if(state[item].menuId !== action.menuId){
                    newState[item] = {menuId: state[item].menuId, sectionId: state[item].sectionId}
                }
            });
            newState[action.sectionId] = {menuId: action.menuId, sectionId: action.sectionId}
            return newState;

        case RESET_ALL_MENUS:
            return newState;

        default:
            return state;
    }
};

const selectedMenu = (state = {}, action: any) => {
	
	switch(action.type){
		case SET_SELECTED_MENUS:
            var newState:any = {};
            newState.menuId = action.menuId;
            newState.sectionId = action.sectionId;
            return newState;
        default:
            return state;
	}
}

export default combineReducers({
    selectedMenu,
    selectedMenus
});

// export const getIsFetchingMenus = (state: any) => state.isFetching;
// export const getSelectedVenue = (state: any) => state.venueList.selectedVenue;
