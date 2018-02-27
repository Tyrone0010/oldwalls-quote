import * as React from 'react';
import StaffDetail from './StaffDetail';
import Customers from './Customers';
import ContactDetails from './ContactDetails';
import Feedback from './Feedback';
import GuestNumbers from './GuestNumbers';
import ChosenPackage from './ChosenPackage';
import Menus from './Menus';
import Quotation from './Quotation';
import {weddingMenu} from '../../../content/data/menus';


export default class Quote extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            index: 0,
            pages: [
                {
                    title: "Staff Detail",
                    nextButton: "Customers >>"
                },
                {
                    title: "Customer(s)",
                    backButton: "<< Staff Detail",
                    nextButton: "Contact Details >>"
                },
                {
                    title: "Contact Details",
                    backButton: "<< Customer(s)",
                    nextButton: "Feedback >>"
                },
                {
                    title: "Feedback",
                    backButton: "<< Contact Details",
                    nextButton: "Guest Numbers >>"
                },
                {
                    title: "Guest Numbers",
                    backButton: "<< Feedback",
                    nextButton: "Packages >>"
                },
                {
                    title: "Packages",
                    backButton: "<< Guest Numbers",
                    nextButton: "Menus >>"
                },
                {
                    title: "Menus",
                    backButton: "<< Packages",
                    nextButton: "Quote >>"
                },
                {
                    title: "Quote",
                    backButton: "<< Menus",
                    //nextButton: "Next >>"
                },
            ],
            meetingDate: {},
            staffMember: "",
            firstName: "",
            surname: "",
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
            chosenMenu: ""
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
            case "firstName":
                this.setState({ firstName: value });
                break;
            case "surname":
                this.setState({ surname: value });
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
            default:
                break;
        }
    }

    addCustomer = () => {
        let list = [...this.state.customerNames, { firstName: this.state.firstName, surname: this.state.surname}];
        this.setState({ firstName: "" });
        this.setState({ surname: "" });
        this.setState({ customerNames: list });
    }

    render(){
        return (
            <div>
                {this.state.index===0 &&
                    <StaffDetail updateState={this.updateState}
                                 meetingDate={this.state.meetingDate}
                                 staffMember={this.state.staffMember}
                    />}
                {this.state.index===1 &&
                    <Customers
                        updateState={this.updateState}
                        addCustomer={this.addCustomer}
                        firstName={this.state.firstName}
                        surname={this.state.surname}
                        customerNames={this.state.customerNames}
                    />
                }
                {this.state.index===2 &&
                    <ContactDetails
                        updateState={this.updateState}
                        houseNameNumber={this.state.houseNameNumber}
                        street={this.state.street}
                        address2={this.state.address2}
                        townCity={this.state.townCity}
                        postcode={this.state.postcode}
                        email={this.state.email}
                        telephoneHome={this.state.telephoneHome}
                        telephoneMobile={this.state.telephoneMobile}
                    />
                }
                {this.state.index===3 &&
                    <Feedback
                        updateState={this.updateState}
                        hearAboutUs={this.state.hearAboutUs}
                        hearAboutShowcase={this.state.hearAboutShowcase}
                    />
                }
                {this.state.index===4 &&
                    <GuestNumbers
                        updateState={this.updateState}
                        adultNumbers={this.state.adultNumbers}
                        childNumbers={this.state.childNumbers}
                        teenNumbers={this.state.teenNumbers}
                        eveningNumbers={this.state.eveningNumbers}
                    />
                }
                {this.state.index===5 &&
                    <ChosenPackage
                        updateState={this.updateState}
                        weddingDate={this.state.weddingDate}
                        chosenPackage={this.state.chosenPackage}
                    />
                }
                {this.state.index===6 &&
                <Menus
                    updateState={this.updateState}
                    weddingMenu={weddingMenu}
                    chosenMenu={this.state.weddingMenus[this.state.chosenMenu]}
                />
                }
                {this.state.index===7 &&
                <Quotation
                    customerNames={this.state.customerNames}
                    weddingDate={this.state.weddingDate}
                    staffMember={this.state.staffMember}
                    weddingPackage={this.state.chosenPackage}
                    weddingMenus={this.state.weddingMenus}
                    adultNumbers={this.state.adultNumbers}
                    childNumbers={this.state.childNumbers}
                    teenNumbers={this.state.teenNumbers}
                    eveningNumbers={this.state.eveningNumbers}
                />
                }
                {   this.state.pages[this.state.index].backButton &&
                    <button type="button" className="btn btn-outline-light" onClick={e => {this.setState({index: this.state.index - 1})}}>
                        {this.state.pages[this.state.index].backButton}
                    </button>
                }
                {   this.state.pages[this.state.index].nextButton &&
                    <button type="button" className="btn btn-outline-secondary" onClick={e => {this.setState({index: this.state.index + 1})}}>
                        {this.state.pages[this.state.index].nextButton}
                    </button>
                }
            </div>
        )
    }
}