import * as React from 'react';

export default (props: any) => {
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