import * as React from 'react'
import { connect } from 'react-redux'
import {quoteSearch} from '../../actions/quotes'
import {setNextStep, setPreviousStep} from '../../actions/wizard'

const QuoteSearchList = (props: any) => {
    const {handleSearchForQuotes} = props;

    return (
        <div>
            <h1>Staff Detail</h1>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="meetingDate">Meeting Date</label>
                    <input id="meetingDate" className="form-control" type="date" />
                </div>
            </div>
            <div>
                <button onClick={(e) => handleSearchForQuotes({})} >Search</button>
                <button type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={e => {props.setNextStepAction()}}>
                    New Quote &gt; &gt;
                </button>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state:any, props:any) => {
        return {
            //members: getActiveProjectMembers(state, props),
        };
    }
    return mapStateToProps;
};

const makeMapDispatchToProps = {
    handleSearchForQuotes:quoteSearch,
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default  connect(makeMapStateToProps, makeMapDispatchToProps)(QuoteSearchList);