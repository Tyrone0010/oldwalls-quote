import * as React from 'react';

export default (props: any) => {
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