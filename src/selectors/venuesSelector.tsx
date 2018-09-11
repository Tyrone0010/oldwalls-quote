import { createSelector } from 'reselect';

const allVenuesSelector =  (state:any, props:any) =>{
    return  state.venues || {};
}

const getSelectedVenueSelector = (state:any, props:any) => {
    return state.venueList.selectedVenue;
}


export const makeGetAllVenues= () => {
    return createSelector(
        [allVenuesSelector],
        (venues) => {
            var venuesArray:any = [];
            if(venues.all){
                venues.all.map(function(id: number){
                    venuesArray.push(venues[id])
                })
            }
            return  venuesArray;
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