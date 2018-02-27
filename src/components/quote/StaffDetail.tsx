import * as React from 'react';

export default (props: any) => {

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
