import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Package from './data/packages';

interface ICustomer {
    firstName: string,
    surname: string
}

const Page1 = (updateState: any, meetingDate: string, selectedItem: number) => {
    return (
        <div>
            <h1>Staff Detail</h1>
            <div className="form-group">
                <label htmlFor="meetingDate">Meeting Date</label>
                <input id="meetingDate" defaultValue={meetingDate} className="form-control" type="date" onChange={e => updateState("meetingDate", e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="staffMember">Staff Member</label>
                <select id="staffMember" className="form-control" onChange={e => updateState("staffMember", e.target.value)}>
                    <option>Nigel Hole</option>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                    <option>Staff 3</option>
                    <option>Staff 4</option>
                </select>
            </div>
        </div>
    )
}

const Page2 = (updateState: any, customers: Array<ICustomer>) => {
    return (
        <div>
            <h1>Customer(s)</h1>
            <div className="form-group">
                <label htmlFor="proposedWeddingDate">First Name</label>
                <input id="proposedWeddingDate" className="form-control" type="text"
                       onChange={e => updateState("firstName", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="staffMember">Surname</label>
                <input id="staffMember" className="form-control" type="text"
                       onChange={e => updateState("surname", e.target.value)}/>
                <button type="submit" className="btn btn-outline-light mb-2">Add guest</button>
            </div>
        </div>
    )
}

const Page3 = (updateState: any, customers: Array<ICustomer>) => {
    return (
        <div>
            <h1>Contact Details</h1>
            <div className="form-group">
                <label htmlFor="houseNumber">House Name/Number</label>
                <input id="houseNumber" className="form-control" type="text"
                       onChange={e => updateState("houseNumber", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input id="street" className="form-control" type="text"
                       onChange={e => updateState("street", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input id="addressLine2" className="form-control" type="text"
                       onChange={e => updateState("address2", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="town">Town/City</label>
                <input id="town" className="form-control" type="text"
                       onChange={e => updateState("town", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" className="form-control" type="text"
                       onChange={e => updateState("postcode", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" className="form-control" type="text"
                       onChange={e => updateState("email", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="telephoneHome">Telephone Home</label>
                <input id="telephoneHome" className="form-control" type="text"
                       onChange={e => updateState("telephoneHome", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="telephoneMobile">Telephone Mobile</label>
                <input id="telephoneMobile" className="form-control" type="text"
                       onChange={e => updateState("telephoneMobile", e.target.value)}/>
            </div>
        </div>
    )
}

const Page4 = (updateState: any, customers: Array<ICustomer>) => {
    return (
        <div>
            <h1>Feedback</h1>
            <div className="form-group">
                <label htmlFor="hearAboutUs">Where did you hear about us?</label>
                <input id="hearAboutUs" className="form-control" type="text"
                       onChange={e => updateState("hearAboutUs", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="showcaseToday">How did you hear about our showcase today?</label>
                <input id="showcaseToday" className="form-control" type="text"
                       onChange={e => updateState("showcaseToday", e.target.value)}/>
            </div>
        </div>
    )
}

const Page5 = (updateState: any, customers: Array<ICustomer>) => {
    return (
        <div>
            <h1>Guest Numbers</h1>
            <div className="form-group">
                <label htmlFor="adultNumbers">Number of Adults</label>
                <input id="adultNumbers" className="form-control" type="number"
                       onChange={e => updateState("adultNumbers", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="ChildNumbers">Number of Children 10 years and under</label>
                <input id="ChildNumbers" className="form-control" type="number"
                       onChange={e => updateState("ChildNumbers", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="teenNumbers">Number of Teens</label>
                <input id="teenNumbers" className="form-control" type="number"
                       onChange={e => updateState("teenNumbers", e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="eveningNumbers">Evening Numbers</label>
                <input id="eveningNumbers" className="form-control" type="number"
                       onChange={e => updateState("eveningNumbers", e.target.value)}/>
            </div>
        </div>
    )
}

const Page6 = (updateState: any, weddingPackage: any, day: number) => {
    return (
        <div >
            <h1>Packages</h1>
            <div >
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="proposedDate">Choose Your Date</label>
                        <input id="proposedDate" className="form-control" type="date"
                               onChange={e => updateState("proposedDate", e.target.value)}/>
                    </div>
                    {weddingPackage &&
                        <div>
                            The date chosen falls into our {weddingPackage.name} in the {weddingPackage.season} on a {weddingPackage.getDayString(day)} and starts at £{weddingPackage.cost}.00
                            <img src="./images/ultimate-castle.jpg"/>
                        </div>
                    }
                </div>
                <div className="col">
                    {weddingPackage &&
                    <div>
                        Information about the package can go here.
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

const pages = {
    Page1, Page2
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
                    //nextButton: "Next >>"
                },
            ]
        };

    }

    updateState = (name: string, value: string) => {
        switch(name){
            case "meetingDate":
                this.setState({ meetingDate: value });
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div>
                {this.state.index===0 && <Page1 updateState={this.updateState} meetingDate={this.state.meetingDate} />}
                {this.state.index===1 && <Page2 updateState={this.updateState} />}
                {this.state.index===2 && <Page3 updateState={this.updateState} />}
                {this.state.index===3 && <Page4 updateState={this.updateState} />}
                {this.state.index===4 && <Page5 updateState={this.updateState} />}
                {this.state.index===5 && <Page6 updateState={this.updateState} />}
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