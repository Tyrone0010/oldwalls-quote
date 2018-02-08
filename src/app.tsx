import * as React from 'react';
import * as ReactDom from 'react-dom';
import Moment from 'react-moment';
import {weddingPackage} from '../content/data/packages';
import {weddingMenu} from '../content/data/menus';
import QuotationDetail from './components/QuotationDetail'

interface IStaffDetailProps {
    firstName: string,
    surname: string,
    updateState: any
}

const StaffDetail = (props: any) => {

    const update = (name: string, value: string) => {
        props.updateState(name, value);
    };

    return (
        <div>
            <h1>Staff Detail</h1>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="meetingDate">Meeting Date</label>
                    <input id="meetingDate" defaultValue={props.meetingDate} className="form-control" type="date"
                           onChange={e => update("meetingDate", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="staffMember">Staff Member</label>
                    <select value={props.staffMember} id="staffMember" className="form-control"
                            onChange={e => update("staffMember", e.target.value)}>
                        <option value="">--select--</option>
                        <option value="Nigel Hole">Nigel Hole</option>
                        <option value="Staff 1">Staff 1</option>
                        <option value="Staff 2">Staff 2</option>
                        <option value="Staff 3">Staff 3</option>
                        <option value="Staff 4">Staff 4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const Page2 = (props: any) => {

    const update = (name: string, value: string) => {
        props.updateState(name, value);
    };

    const addCustomer = () => {
        props.addCustomer();
    }

    return (
        <div>
            <h1>Customer(s)</h1>
            <div className="list-group">
            {
                props.customerNames && props.customerNames.length > 0 &&
                    props.customerNames.map((customer: any) => {
                        return(
                            <button type="button" className="list-group-item list-group-item-action">
                                {customer.firstName + ' ' + customer.surname}
                            </button>
                        )
                    })
            }

            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="proposedWeddingDate">First Name</label>
                    <input id="proposedWeddingDate" value={props.firstName} className="form-control" type="text"
                           onChange={e => update("firstName", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="staffMember">Surname</label>
                    <input id="staffMember" value={props.surname} className="form-control" type="text"
                           onChange={e => update("surname", e.target.value)}/>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-light mb-2" onClick={() => {addCustomer();}}>Add guest</button>
            <div></div>
        </div>
    )
}

const Page3 = (props: any) => {
    return (
        <div>
            <h1>Contact Details</h1>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="houseNameNumber">House Name/Number</label>
                    <input id="houseNameNumber" defaultValue={props.houseNameNumber} className="form-control" type="text"
                           onChange={e => props.updateState("houseNameNumber", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="street">Street</label>
                    <input id="street" defaultValue={props.street} className="form-control" type="text"
                           onChange={e => props.updateState("street", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="address2">Address Line 2</label>
                    <input id="address2" defaultValue={props.address2} className="form-control" type="text"
                           onChange={e => props.updateState("address2", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="townCity">Town/City</label>
                    <input id="townCity" defaultValue={props.townCity} className="form-control" type="text"
                           onChange={e => props.updateState("townCity", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="postcode">Postcode</label>
                    <input id="postcode" defaultValue={props.postcode} className="form-control" type="text"
                           onChange={e => props.updateState("postcode", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" defaultValue={props.email} className="form-control" type="text"
                           onChange={e => props.updateState("email", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="telephoneHome">Telephone Home</label>
                    <input id="telephoneHome" defaultValue={props.telephoneHome} className="form-control" type="text"
                           onChange={e => props.updateState("telephoneHome", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="telephoneMobile">Telephone Mobile</label>
                    <input id="telephoneMobile" defaultValue={props.telephoneMobile} className="form-control" type="text"
                           onChange={e => props.updateState("telephoneMobile", e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

const Page4 = (props: any) => {
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
        </div>
    )
}

const Page5 = (props: any) => {
    return (
        <div>
            <h1>Guest Numbers</h1>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="adultNumbers">Number of Adults</label>
                    <input id="adultNumbers" defaultValue={props.adultNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("adultNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="ChildNumbers">Number of Children 10 years and under</label>
                    <input id="ChildNumbers" defaultValue={props.childNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("childNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="teenNumbers">Number of Teens</label>
                    <input id="teenNumbers" defaultValue={props.teenNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("teenNumbers", e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="eveningNumbers">Evening Numbers</label>
                    <input id="eveningNumbers" defaultValue={props.eveningNumbers} className="form-control" type="number"
                           onChange={e => props.updateState("eveningNumbers", e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

const Page6 = (props: any) => {
    let chosenPackage: any = null;
    const day: number = null;

    const setPackage = (date: string) => {

        props.updateState('weddingDate', date);
        chosenPackage = weddingPackage(null, new Date(date));
        props.updateState('chosenPackage', chosenPackage);
    }

    const weddingDate = new Date(props.weddingDate);
    return (
        <div>
            <h1>Packages</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="proposedDate">Choose Your Date</label>
                        <input id="proposedDate" defaultValue={props.weddingDate} className="form-control" type="date"
                               onChange={e => setPackage(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        {props.chosenPackage &&
                        <div>
                            The date chosen falls into our <b>{props.chosenPackage.name}</b> in the <b>{props.chosenPackage.season}</b> on
                            a {props.chosenPackage.getDayString(weddingDate.getDay())} and starts at <b>£{props.chosenPackage.cost}.00</b>
                            <img className="img-responsive img-circle" src="content/images/ultimate-castle.jpg"/>
                        </div>
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    {props.chosenPackage &&
                    <div>
                        Information about the package can go here.
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

const Page7 = (props: any) => {
    const updatePanel = (menu: any) => {
        props.updateState('weddingMenus', menu);
    }

    return (
        <div >
            <h1>Choose Your Menu</h1>
            <div className="row">
                <div className="col-md-4">
                    {
                        weddingMenu(null).map((menus: any) => {
                            return (
                                <div>
                                    <div key={menus.title}>{menus.title}</div>
                                    {
                                        menus.items.map((menu: any) => {
                                            return(
                                                <div key={menu.name} className="radio">
                                                    <label>
                                                        <input type="radio" name={menus.typeName} value={menu.name} />
                                                        <a onClick={(e) => {updatePanel(menu)}}>{menu.name}</a>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-8">
                    {props.chosenMenu &&
                        <div className="panel panel-default" >
                            <div className="panel-body menu">
                                <h3 className="menu">{props.chosenMenu.name} <span className="badge">Price per head: £{props.chosenMenu.pricePerHead}</span></h3>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img className="img-responsive img-circle" src={props.chosenMenu.imageUrl}/>
                                    </div>
                                    <div className="col-md-8">&nbsp;</div>
                                </div>
                                {/*Starters*/}
                                {
                                    props.chosenMenu.menu.starters &&
                                    <h4 className="menu">
                                        {props.chosenMenu.menu.starters.title}
                                    </h4>
                                }
                                <div className="list-group">
                                {
                                    props.chosenMenu.menu.starters &&
                                    props.chosenMenu.menu.starters.items.map((starters: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{starters.title}</h5>
                                                <p className="list-group-item-text menu-description">{starters.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                                </div>
                                {/*Main*/}
                                {
                                    props.chosenMenu.menu.main &&
                                    <h4 className="menu">
                                        {props.chosenMenu.menu.main.title}
                                    </h4>
                                }
                                <div className="list-group">
                                {
                                    props.chosenMenu.menu.main &&
                                    props.chosenMenu.menu.main.items.map((m: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{m.title}</h5>
                                                <p className="list-group-item-text menu-description">{m.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                                </div>
                                {/*Desert*/}
                                {
                                    props.chosenMenu.menu.desserts &&
                                    <h4 className="menu">
                                        {props.chosenMenu.menu.desserts.title}
                                    </h4>
                                }
                                <div className="list-group">
                                {
                                    props.chosenMenu.menu.desserts &&
                                    props.chosenMenu.menu.desserts.items.map((dessert: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{dessert.title}</h5>
                                                <p className="list-group-item-text menu-description">{dessert.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const Quotation = (props: any) => {
    return (
        <div>
            <h1>Congratulations</h1>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        {
                            props.customerNames.map((name: any, index: number) => {
                                return(
                                    <span>{index !== 0 ?' & ' : ' '}{name.firstName}</span>
                                )
                            })
                        }
                    </div>
                    <div>
                        Save the Date: {props.weddingDate}
                    </div>
                    <hr />
                    <div>
                        <h4>Your wedding package includes:</h4>
                        {<QuotationDetail {...props} />}
                    </div>
                    <div>
                        Your wedding booking co-ordinator is {props.staffMember} who you can call on 07814??????
                    </div>
                </div>
            </div>
            <div className="row">
                <h3>THE NEXT STEPS</h3>
                <div className="col-md-4">
                    <h4>Within 7 days</h4>
                    <div>
                        Confirm your booking with a £500 deposit or we will see you again on the ??th Month 2018
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Within 30-60 days</h4>
                    <div>
                        Full deposit required and introduction to your dedicated wedding co-ordinator
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Within 8-12 months (approx)</h4>
                    <div>
                        Prior to your wedding day an invitation to your lavish wedding taster evening
                    </div>
                </div>
            </div>
        </div>
    )
}

class App extends React.Component<any, any>{
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
                    <Page2
                        updateState={this.updateState}
                        addCustomer={this.addCustomer}
                        firstName={this.state.firstName}
                        surname={this.state.surname}
                        customerNames={this.state.customerNames}
                    />
                }
                {this.state.index===2 &&
                    <Page3
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
                    <Page4
                        updateState={this.updateState}
                        hearAboutUs={this.state.hearAboutUs}
                        hearAboutShowcase={this.state.hearAboutShowcase}
                    />
                }
                {this.state.index===4 &&
                    <Page5
                        updateState={this.updateState}
                        adultNumbers={this.state.adultNumbers}
                        childNumbers={this.state.childNumbers}
                        teenNumbers={this.state.teenNumbers}
                        eveningNumbers={this.state.eveningNumbers}
                    />
                }
                {this.state.index===5 &&
                    <Page6
                        updateState={this.updateState}
                        weddingDate={this.state.weddingDate}
                        chosenPackage={this.state.chosenPackage}
                    />
                }
                {this.state.index===6 &&
                <Page7
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

ReactDom.render(
    <App />, document.getElementById("root")
)