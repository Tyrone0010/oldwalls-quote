import * as React from 'react';
import { connect } from "react-redux";
import {updateFormField} from '../../actions/quoteForm';
import {validateCustomerDetails} from '../../utilities/validation/quote';
import {setNextStep, setPreviousStep} from '../../actions/wizard';
import {IQuoteForm} from '../../interfaces/IQuoteForm';
import {makeGetContactDetails} from '../../selectors/quoteFormSelector'


class ContactDetails extends React.Component<any, any>{

    constructor(props:any){
        super(props);
        this.state = {errors:{}}
    }

    updateCustomerDetails = () => {
        const customerValidationResult = validateCustomerDetails(
            this.props.contactDetails.houseNameNumber, this.props.contactDetails.street,
            this.props.contactDetails.townCity, this.props.contactDetails.postcode,
            this.props.contactDetails.telephoneHome);
        if(customerValidationResult){
            let errors = this.state.errors;
            //we know the keys so just add or update
            errors.houseNameNumber = customerValidationResult.houseNameNumber ? true : false;
            errors.street = customerValidationResult.street ? true : false;
            errors.townCity = customerValidationResult.townCity ? true : false;
            errors.postcode = customerValidationResult.postcode ? true : false;
            errors.telephoneHome = customerValidationResult.telephoneHome ? true : false;
            this.setState({errors: errors});
        }else{
            let errors = {};
            this.props.setNextStepAction()
        }
    }

    errorClass = (key:string) => {
        if(this.state.errors[key]){
            return "has-error";
        }
        return ""
    }

    render(){

        return (
            <div>
                <h1>Contact Details</h1>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('houseNameNumber')}`}>
                        <label htmlFor="houseNameNumber">House Name/Number</label>
                        <input id="houseNameNumber" defaultValue={this.props.contactDetails.houseNameNumber} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("houseNameNumber", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('street')}`}>
                        <label htmlFor="street">Street</label>
                        <input id="street" defaultValue={this.props.contactDetails.street} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("street", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="address2">Address Line 2</label>
                        <input id="address2" defaultValue={this.props.contactDetails.address2} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("address2", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('townCity')}`}>
                        <label htmlFor="townCity">Town/City</label>
                        <input id="townCity" defaultValue={this.props.contactDetails.townCity} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("townCity", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                <div className={`form-group col-md-3 ${this.errorClass('postcode')}`}>
                        <label htmlFor="postcode">Postcode</label>
                        <input id="postcode" defaultValue={this.props.contactDetails.postcode} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("postcode", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('email')}`}>
                        <label htmlFor="email">Email</label>
                        <input id="email" defaultValue={this.props.contactDetails.email} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("email", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('telephoneHome')}`}>
                        <label htmlFor="telephoneHome">Telephone Home</label>
                        <input id="telephoneHome" defaultValue={this.props.contactDetails.telephoneHome} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("telephoneHome", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="telephoneMobile">Telephone Mobile</label>
                        <input id="telephoneMobile" defaultValue={this.props.contactDetails.telephoneMobile} className="form-control" type="text"
                               onChange={e => this.props.updateFormFieldAction("telephoneMobile", e.target.value)}/>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-light" 
                        onClick={e => {this.props.setPreviousStepAction()}}>
                        &lt; &lt; Customers
                    </button>
                    <button type="button" 
                        className="btn btn-outline-secondary" 
                        onClick={e => {this.updateCustomerDetails()}}>
                        Feedback &gt; &gt;
                    </button>
                </div>
            </div>
        )
    }
}

const makeMapStateToProps = () => {
    const getContactDetails = makeGetContactDetails();
    const mapStateToProps = (state:any, props:any) => {
        return {
            contactDetails: getContactDetails(state, props)
        };
    }
    return mapStateToProps;
};

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep,
    updateFormFieldAction: updateFormField
}

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(ContactDetails);

