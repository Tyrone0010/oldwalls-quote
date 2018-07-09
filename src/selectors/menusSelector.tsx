import { createSelector } from 'reselect';

const allMenusSelector =  (state:any, props:any) =>{
    return  state.menus || {};
}

const getSelectedVenueSelector = (state:any, props:any) => {
    return state.venueList.selectedVenue;
}


export const makeGetAllMenus= () => {
    return createSelector(
        [allMenusSelector],
        (menus) => {
            var menusArray:any = [];
            if(menus.all){
                menus.all.map(function(id: number){
                    menusArray.push(menus[id])
                })
            }
            return  menusArray;
        }
    )
}

export const makeGetSelectedVenue= () => {
    return createSelector(
        [getSelectedVenueSelector],
        (venue) => {
            return  venue;
        }
    )
}