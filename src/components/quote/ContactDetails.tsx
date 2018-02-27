import * as React from 'react';

export default (props: any) => {
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
