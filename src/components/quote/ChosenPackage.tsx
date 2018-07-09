import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {weddingPackage} from '../../../content/data/packages';
import {calculatePackage} from '../../actions/package';
import {makeGetChosenPackage, makeGetIsChosenPackageLoaded} from '../../selectors/chosenPackageSelector';
import { IChosenPackage } from '../../interfaces/IChosenPackage';
import VenuesDropDown from './VenuesDropDown'
import {makeGetSelectedVenue} from '../../selectors/venuesSelector';
import {setNextStep, setPreviousStep} from '../../actions/wizard'

const ChosenPackage = (props: any) => {

    const update = (name: string, value: string) => {
        if(value==='forward'){
            if(props.isChosenPackageLoaded){
                props.updateState(name, value);
            }
        }else{
            props.updateState(name, value);
        }
    };

    const { chosenPackage} = props;
    const day: number = null;

    const setPackage = (date: string) => {
        //props.updateState('weddingDate', date);
        //chosenPackage = weddingPackage(null, new Date(date));
        //props.updateState('chosenPackage', chosenPackage);
        props.calculatePackageAction(date, 1);
    }

    const weddingDate = new Date(props.weddingDate);
    return (
        <div>
            <h1>Packages</h1>
            <div className="row">
                <div className="col-md-4">
                    <VenuesDropDown />
                    {
                        props.selectedVenue && props.selectedVenue < 0 &&
                        <div>Please choose a venue before selecting the date.</div>
                    }
                    {
                        props.selectedVenue && props.selectedVenue > -1 &&
                        <div className="form-group">
                            <label htmlFor="proposedDate">Choose Your Date</label>
                            <input id="proposedDate" defaultValue={props.weddingDate} className="form-control" type="date"
                                onChange={e => setPackage(e.target.value)}/>
                        </div>
                    }
                    <div className="form-group">
                        {chosenPackage &&
                        <div>
                            The date chosen falls into our <b>{chosenPackage.name}</b> in the <b>{'chosenPackage.Season'}</b> on
                            a {chosenPackage.dayOfWeek} and starts at <b>£{chosenPackage.price}.00</b>
                            <img className="img-responsive img-circle" src="content/images/ultimate-castle.jpg"/>
                        </div>
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    {chosenPackage &&
                    <div>
                        {chosenPackage.blurb}
                    </div>
                    }
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-light" 
                    onClick={e => {props.setPreviousStepAction()}}>
                    &lt; &lt; Guest Numbers
                </button>
                <button type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={e => {props.setNextStepAction()}}>
                    Menus &gt; &gt;
                </button>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const getChosenPackage = makeGetChosenPackage();
    const getIsChosenPackageLoaded = makeGetIsChosenPackageLoaded();
    const getSelectedVenue = makeGetSelectedVenue();
    const mapStateToProps = (state: any, props: any) => {
        return {
            chosenPackage: getChosenPackage(state, props),
            isChosenPackageLoaded: getIsChosenPackageLoaded(state, props),
            selectedVenue: getSelectedVenue(state, props)
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    calculatePackageAction: calculatePackage,
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(ChosenPackage);