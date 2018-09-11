import * as React from 'react';
import { connect } from "react-redux";
import {setNextStep, setPreviousStep} from '../../actions/wizard'
import {makeGetGuestNumbers} from '../../selectors/quoteFormSelector'
import {validateCustomerNumbers} from '../../utilities/validation/quote';
import {updateFormField} from '../../actions/quoteForm';

class GuestNumbers extends React.Component<any, any>{

    constructor(props:any){
        super(props);
        this.state = {errors:{}}
    }

    errorClass = (key:string) => {
        if(this.state.errors[key]){
            return "has-error";
        }
        return ""
    }

    updateCustomerNumbers = () => {
        const customerValidationResult = validateCustomerNumbers(
            this.props.guestNumbers.adultNumbers, this.props.guestNumbers.childNumbers,
            this.props.guestNumbers.teenNumbers, this.props.guestNumbers.eveningNumbers);
        if(customerValidationResult){
            let errors = this.state.errors;
            errors.adultNumbers = customerValidationResult.adultNumbers ? true : false;
            errors.teenNumbers = customerValidationResult.teenNumbers ? true : false;
            errors.childNumbers = customerValidationResult.childNumbers ? true : false;
            errors.eveningNumbers = customerValidationResult.eveningNumbers ? true : false;
            this.setState({errors: errors});
        }else{
            let errors = {};
            this.props.setNextStepAction()
        }
    }

    render(){
        return (
            <div>
                <h1>Guest Numbers</h1>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('adultNumbers')}`}>
                        <label htmlFor="adultNumbers">Number of Adults</label>
                        <input id="adultNumbers" defaultValue={this.props.guestNumbers.adultNumbers} className="form-control" type="number"
                               onChange={e => this.props.updateFormFieldAction("adultNumbers", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('childNumbers')}`}>
                        <label htmlFor="ChildNumbers">Number of Children 10 years and under</label>
                        <input id="ChildNumbers" defaultValue={this.props.guestNumbers.childNumbers} className="form-control" type="number"
                               onChange={e => this.props.updateFormFieldAction("childNumbers", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('teenNumbers')}`}>
                        <label htmlFor="teenNumbers">Number of Teens</label>
                        <input id="teenNumbers" defaultValue={this.props.guestNumbers.teenNumbers} className="form-control" type="number"
                               onChange={e => this.props.updateFormFieldAction("teenNumbers", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('eveningNumbers')}`}>
                        <label htmlFor="eveningNumbers">Evening Numbers</label>
                        <input id="eveningNumbers" defaultValue={this.props.guestNumbers.eveningNumbers} className="form-control" type="number"
                               onChange={e => this.props.updateFormFieldAction("eveningNumbers", e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-light" 
                        onClick={e => {this.props.setPreviousStepAction()}}>
                        &lt; &lt; Feedback
                    </button>
                    <button type="button" 
                        className="btn btn-outline-secondary" 
                        onClick={e => {this.updateCustomerNumbers()}}>
                        Choose Package &gt; &gt;
                    </button>
                </div>
            </div>
        )
    }
}

const makeMapStateToProps = () => {
    const getGuestNumbers = makeGetGuestNumbers();
    const mapStateToProps = (state:any, props:any) => {
        return {
            guestNumbers: getGuestNumbers(state, props)
        };
    }
    return mapStateToProps;
};

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep,
    updateFormFieldAction: updateFormField
}

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(GuestNumbers);
