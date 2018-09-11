import * as React from 'react';
import { connect } from "react-redux";
import {setNextStep, setPreviousStep} from '../../actions/wizard'

const Feedback = (props: any) => {
    const update = (name: string, value: string) => {
        if(value==='forward'){
            props.updateState(name, value);
        }else{
            props.updateState(name, value);
        }
    };

    return (
        <div>
            <h1>Feedback</h1>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="hearAboutUs">Where did you hear about us?</label>
                    <textarea id="hearAboutUs" defaultValue={props.hearAboutUs} className="form-control" rows={3}
                              onChange={e => props.updateState("hearAboutUs", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="hearAboutShowcase">How did you hear about our showcase today?</label>
                    <textarea id="hearAboutShowcase" defaultValue={props.hearAboutShowcase} className="form-control" rows={3}
                              onChange={e => props.updateState("hearAboutShowcase", e.target.value)}/>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-light" 
                    onClick={e => {props.setPreviousStepAction()}}>
                    &lt; &lt; Contact Details
                </button>
                <button type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={e => {props.setNextStepAction()}}>
                    Guest Numbers &gt; &gt;
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

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(Feedback);
