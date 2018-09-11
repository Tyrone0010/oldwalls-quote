import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import App from '../App';
import {addCustomer} from '../../actions/quote'
import {validateCustomer} from '../../utilities/validation/quote';
import {setNextStep, setPreviousStep} from '../../actions/wizard';
import {makeGetWizardStepIndex, makeGetCustomers, makeGetCustomerCount} from '../../selectors/quote'

class Customers extends React.Component<any, any>{

    constructor(props:any){
        super(props);
        this.state = {
            firstName: '',
            middleNames: '',
            surname: '',
            firstNameError: false,
            surnameError: false
        }
    }

    addCustomer = () => {
        const customerValidationResult = validateCustomer(this.state.firstName, this.state.surname);
        if(customerValidationResult){
            this.setState({firstNameError: customerValidationResult.firstName ? true : false});   
            this.setState({surnameError: customerValidationResult.surname ? true : false});
        }else{
            this.props.addCustomerAction(this.state.firstName, '', this.state.surname);
            this.setState({firstName: ''});
            this.setState({middleNames: ''});
            this.setState({surname: ''});
        }
    }

    updateLocalState = (name: string, value: string) => {
        switch(name){
            case "firstName":
                this.setState({ firstName: value });
                break;
            case "surname":
                this.setState({ surname: value });
                break;
        }
    }


    errorClass = (key:string) => {
        if(this.state[key]){
            return "has-error";
        }
        return ""
    }

    render(){
        return (
            <div>
                <h1>Customer(s)</h1>
                <div className="list-group">
                    {
                        this.props.customersObj.customerCount > 0 &&
                        this.props.customersObj.customers.map((customer: any) => {
                            return(
                                <button type="button" className="list-group-item list-group-item-action">
                                    {customer.firstName + ' ' + customer.surname}
                                </button>
                            )
                        })
                    }
    
                </div>
                <div className="row">
                    <div className='form-group col-md-3'>
                    Customer count: {this.props.customerCount}
                    </div>
                </div>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('firstNameError')}`}>
                        <label htmlFor="firstName" className="control-label">First Name</label>
                        <input id="firstName" value={this.state.firstName} 
                            className="form-control" type="text"
                            onChange={e => this.updateLocalState("firstName", e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className={`form-group col-md-3 ${this.errorClass('surnameError')}`}>
                        <label htmlFor="surname" className="control-label">Surname</label>
                        <input id="surname" value={this.state.surname} 
                            className="form-control" type="text"
                            onChange={e => this.updateLocalState("surname", e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-light mb-2" onClick={() => {this.addCustomer();}}>Add guest</button>
                <div>
                    <button type="button" className="btn btn-outline-light" 
                        onClick={e => {this.props.setPreviousStepAction()}}>
                        &lt; &lt; Back
                    </button>
                    <button type="button" 
                        className="btn btn-outline-secondary" 
                        disabled={this.props.customersObj.customerCount.length <= 0}
                        onClick={e => {this.props.setNextStepAction()}}>
                        Contact Details &gt; &gt;
                    </button>
                </div>
            </div>
        )
    } 
}

const makeMapStateToProps = () => {
    const getCustomers = makeGetCustomers();
    const getCustomerCount = makeGetCustomerCount();
    const mapStateToProps = (state:any, props:any) => {
        return {
            customersObj: getCustomers(state, props),
            customerCount: getCustomerCount(state, props)
        };
    }
    return mapStateToProps;
};

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep,
    addCustomerAction: addCustomer
}

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(Customers);
