import * as React from 'react';
import { connect } from "react-redux";
import {setNextStep, setPreviousStep} from '../../actions/wizard'

const GuestNumbers = (props: any) => {
    const update = (name: string, value: string) => {
        if(value==='forward'){
            if(props.validateCustomerNumbers()){
                props.updateState(name, value);
            }
        }else{
            props.updateState(name, value);
        }
    };

    const errorClass = (key:string) => {
        if(props.errorCollection[key]){
            return "has-error";
        }
        return ""
    }

    return (
        <div>
            <h1>Guest Numbers</h1>
            <div className="row">
            <div className={`form-group col-md-3 ${errorClass('adultNumbers')}`}>
                    <label htmlFor="adultNumbers">Number of Adults</label>
                    <input id="adultNumbers" defaultValue={props.adultNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("adultNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
            <div className={`form-group col-md-3 ${errorClass('childNumbers')}`}>
                    <label htmlFor="ChildNumbers">Number of Children 10 years and under</label>
                    <input id="ChildNumbers" defaultValue={props.childNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("childNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
            <div className={`form-group col-md-3 ${errorClass('teenNumbers')}`}>
                    <label htmlFor="teenNumbers">Number of Teens</label>
                    <input id="teenNumbers" defaultValue={props.teenNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("teenNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
            <div className={`form-group col-md-3 ${errorClass('eveningNumbers')}`}>
                    <label htmlFor="eveningNumbers">Evening Numbers</label>
                    <input id="eveningNumbers" defaultValue={props.eveningNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("eveningNumbers", e.target.value)}/>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-light" 
                    onClick={e => {props.setPreviousStepAction()}}>
                    &lt; &lt; Feedback
                </button>
                <button type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={e => {props.setNextStepAction()}}>
                    Choose Package &gt; &gt;
                </button>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state:any, props:any) => {
        return {
        };
    }
    return mapStateToProps;
};

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(GuestNumbers);
