import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {weddingPackage} from '../../../content/data/packages';
import {setSelectedVenue} from '../../actions/venues';
import {getVenueMenus} from '../../actions/menus'
import {makeGetAllVenues, makeGetSelectedVenue} from '../../selectors/venuesSelector';


const VenuesDropDown = (props: any) => {

    const selectVenue = (event:any) => {
        props.setSelectedVenueAction(event.target.value);
        props.getVenueMenusAction(event.target.value);
    }

    return (
        <div className="form-group">
            <label htmlFor="venues">Venues list:</label>
            <select onChange={selectVenue} value={props.selectedVenue} className="form-control" id="venues">
                <option key="-1" value="-1">Select a venue</option>
                {props.allVenues && 
                    props.allVenues.map(function(venue:any, index:number){
                        return (
                            <option key={index} value={venue.id} >
                                {venue.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>    
    )
}

const makeMapStateToProps = () => {
    const getAllVenues = makeGetAllVenues();
    const getSelectedVenue = makeGetSelectedVenue();
    const mapStateToProps = (state: any, props: any) => {
        return {
            allVenues: getAllVenues(state, props),
            selectedVenue: getSelectedVenue(state, props)
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    setSelectedVenueAction: setSelectedVenue,
    getVenueMenusAction: getVenueMenus
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(VenuesDropDown);