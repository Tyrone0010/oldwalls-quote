import * as React from 'react';

export default (props: any) => {

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
