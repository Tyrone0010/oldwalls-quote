import {normalize} from 'normalizr';
import * as schema from '../schemas';
import * as api from '../api/menus';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {GET_VENUE_MENUS_SUCCESS, GET_VENUE_MENUS_FAILURE, GET_VENUE_SECTIONS_SUCCESS, GET_VENUE_SECTIONS_FAILURE, 
    GET_VENUE_MENU_ITEMS_SUCCESS, GET_VENUE_MENU_ITEMS_FAILURE, SET_SELECTED_MENUS} from '../constants/menus';

export const getVenueMenus = (venueId: number) => (dispatch:any, getState:any) => {
          return api.getVenuMenus(venueId)
            .then(
                response => {
                handleResponse(response, 
                    (data:any)=> { dispatch(setGetVenueMenusResultsSuccess(data)) }, 
                    (error:any)=> { dispatch(setGetVenueMenusResultsFailure()) })
                }
            ).then(
                () => {
                    api.getVenueSections(venueId)
                        .then(
                            response => {
                                handleResponse(response, 
                                    (data:any)=> { dispatch(setGetVenueSectionsResultsSuccess(data)) }, 
                                    (error:any)=> { dispatch(setGetVenueSectionsResultsFailure()) })
                            }
                        ).then(
                            () => {
                                api.getVenueMenuItems(venueId).then(response => {
                                    handleResponse(response, 
                                        (data:any)=> { dispatch(setGetVenueMenuItemsResultsSuccess(data)) }, 
                                        (error:any)=> { dispatch(setGetVenueMenuItemsResultsFailure()) })
                                })
                            }
                        )
                }
            );
}

export const setSelectedMenuSection = (menuId: number, sectionId: number) => (dispatch:any, getState:any) => {
    dispatch(setMenuSectionAction(menuId, sectionId))
}

//Todo: Why does the promise not reolve to a plain object??
const setGetVenueMenusResultsSuccess = (data: any) => {
    var normalised = normalize(data, [schema.menus]);
    return {
        type: GET_VENUE_MENUS_SUCCESS,
        data: normalised.entities.menus || {}
    };
};

const setGetVenueMenusResultsFailure = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: GET_VENUE_MENUS_FAILURE,
            data: null
        });
    })
};

const setGetVenueSectionsResultsSuccess = (data: any) => {
    var normalised = normalize(data, [schema.menuSections]);
    return {
        type: GET_VENUE_SECTIONS_SUCCESS,
        data: normalised.entities.menuSections || {}
    };
};

const setGetVenueSectionsResultsFailure = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: GET_VENUE_SECTIONS_FAILURE,
            data: null
        });
    })
};

const setGetVenueMenuItemsResultsSuccess = (data: any) => {
    var normalised = normalize(data, [schema.menuItems]);
    return {
        type: GET_VENUE_MENU_ITEMS_SUCCESS,
        data: normalised.entities.menuItems || {}
    };
};

const setGetVenueMenuItemsResultsFailure = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: GET_VENUE_MENU_ITEMS_FAILURE,
            data: null
        });
    })
};

const setMenuSectionAction = (menuId: number, sectionId: number) => {
    return {
        type: SET_SELECTED_MENUS,
        menuId: menuId,
        sectionId: sectionId
    };
};
