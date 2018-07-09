import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import QuoteSearchList from './QuoteSearchList';
import Customers from './Customers';
import ContactDetails from './ContactDetails';
import Feedback from './Feedback';
import GuestNumbers from './GuestNumbers';
import ChosenPackage from './ChosenPackage';
import Menus from './Menus';
import {validateCustomerDetails, validateCustomerNumbers} from '../../utilities/validation/quote';
import CostSummary from './CostSummary';
import {makeGetWizardStepIndex} from '../../selectors/quote'

class Quote extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            pages: [
                {
                    title: "Staff Detail",
                },
                {
                    title: "Customer(s)",
                },
                {
                    title: "Contact Details",
                },
                {
                    title: "Feedback",
                },
                {
                    title: "Guest Numbers",
                },
                {
                    title: "Packages",
                },
                {
                    title: "Menus",
                },
                {
                    title: "Quote",
                },
            ],
            meetingDate: {},
            staffMember: "",
            houseNameNumber:"",
            street:"",
            address2:"",
            townCity:"",
            postcode:"",
            email:"",
            telephoneHome:"",
            telephoneMobile:"",
            hearAboutUs:"",
            hearAboutShowcase:"",
            adultNumbers:"",
            childNumbers:"",
            teenNumbers:"",
            eveningNumbers:"",
            weddingDate:"",
            customerNames: [],
            chosenPackage: null,
            weddingMenus: {keys:[]},
            chosenMenu: "",
            errorCollection: {}
        };

    }

    updateState = (name: string, value: any) => {
        switch(name){
            case "meetingDate":
                this.setState({ meetingDate: value });
                break;
            case "staffMember":
                this.setState({ staffMember: value });
                break;
            case "houseNameNumber":
                this.setState({ houseNameNumber: value });
                break;
            case "street":
                this.setState({ street: value });
                break;
            case "address2":
                this.setState({ address2: value });
                break;
            case "townCity":
                this.setState({ townCity: value });
                break;
            case "postcode":
                this.setState({ postcode: value });
                break;
            case "email":
                this.setState({ email: value });
                break;
            case "telephoneHome":
                this.setState({ telephoneHome: value });
                break;
            case "telephoneMobile":
                this.setState({ telephoneMobile: value });
                break;
            case "hearAboutUs":
                this.setState({ hearAboutUs: value });
                break;
            case "hearAboutShowcase":
                this.setState({ hearAboutShowcase: value });
                break;
            case "adultNumbers":
                const adultNumbers = +value;
                this.setState({ adultNumbers: adultNumbers });
                break;
            case "childNumbers":
                const childNumbers = +value;
                this.setState({ childNumbers: childNumbers });
                break;
            case "teenNumbers":
                const teenNumbers = +value;
                this.setState({ teenNumbers: teenNumbers });
                break;
            case "eveningNumbers":
                const eveningNumbers = +value;
                this.setState({ eveningNumbers: eveningNumbers });
                break;
            case "weddingDate":
                this.setState({ weddingDate: value });
                break;
            case "chosenPackage":
                this.setState({ chosenPackage: value });
                break;
            case "weddingMenus":
                if(this.state.weddingMenus.keys.indexOf(value.name) >= 0){
                    this.setState({chosenMenu : value.name});
                }else{
                    this.setState({chosenMenu : value.name});
                    let weddingMenusCopy = this.state.weddingMenus;
                    this.state.weddingMenus.keys.map((menu:any, index:number) => {
                        if(value.typeName === weddingMenusCopy[menu].typeName){
                            const menuIndex =  this.state.weddingMenus.keys.indexOf(menu);
                            weddingMenusCopy.keys.splice(menuIndex, 1);
                            delete weddingMenusCopy[menu];
                        }
                    });
                    weddingMenusCopy[value.name] = value;
                    weddingMenusCopy.keys.push(value.name);
                    this.setState({weddingMenus : weddingMenusCopy});
                }
                break;
            case "errorCollection": 
                this.setState({errorCollection : value});
                break;
            default:
                break;
        }
    }

    validateCustomerNumbersfunc = () => {
        const customerValidationResult = validateCustomerNumbers(
            this.state.adultNumbers, this.state.childNumbers,
            this.state.teenNumbers, this.state.eveningNumbers);
            if(customerValidationResult){
                let errors = this.state.errorCollection;
                //we know the keys so just add or update
                if(customerValidationResult.adultNumbers){
                    errors.adultNumbers = customerValidationResult.adultNumbers;
                }
                if(customerValidationResult.childNumbers){
                    errors.childNumbers = customerValidationResult.childNumbers;
                }
                if(customerValidationResult.teenNumbers){
                    errors.teenNumbers = customerValidationResult.teenNumbers;
                }
                if(customerValidationResult.eveningNumbers){
                    errors.eveningNumbers = customerValidationResult.eveningNumbers;
                }
                this.setState({errorCollection: errors});
                return false;
            }else{
                let errors = this.state.errorCollection;
                delete errors["adultNumbers"];
                delete errors["childNumbers"];
                delete errors["teenNumbers"];
                delete errors["eveningNumbers"];
                this.setState({ errorCollection: errors });
                return true;
            }
    
    }

    render(){
        return (
            <div>
                {this.props.wizardStepIndex  === 0 &&
                    <QuoteSearchList updateState={this.updateState}
                                 meetingDate={this.state.meetingDate}
                                 staffMember={this.state.staffMember}
                    />}
                {this.props.wizardStepIndex===1 &&
                    <Customers />
                }
                {this.props.wizardStepIndex===2 &&
                    <ContactDetails  />
                }
                {this.props.wizardStepIndex===3 &&
                    <Feedback
                        updateState={this.updateState}
                        hearAboutUs={this.state.hearAboutUs}
                        hearAboutShowcase={this.state.hearAboutShowcase}
                    />
                }
                {this.props.wizardStepIndex===4 &&
                    <GuestNumbers
                        updateState={this.updateState}
                        adultNumbers={this.state.adultNumbers}
                        childNumbers={this.state.childNumbers}
                        teenNumbers={this.state.teenNumbers}
                        eveningNumbers={this.state.eveningNumbers}
                        errorCollection={this.state.errorCollection}
                        validateCustomerNumbers={this.validateCustomerNumbersfunc}
                    />
                }
                {this.props.wizardStepIndex===5 &&
                    <ChosenPackage
                        updateState={this.updateState}
                    />
                }
                {this.props.wizardStepIndex===6 &&
                <Menus
                    updateState={this.updateState}
                />
                }
                {this.props.wizardStepIndex===7 &&
                    <CostSummary />
                }
            </div>
        )
    }
}

const makeMapStateToProps = () => {
    const getWizardStepIndex = makeGetWizardStepIndex();
    const mapStateToProps = (state: any, props: any) => {
        return {
            wizardStepIndex: getWizardStepIndex(state, props),
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(Quote);
