import * as React from 'react'
import { connect } from 'react-redux'
import {quoteSearch} from '../../actions/quotes'


const makeMapStateToProps = () => {
    const mapStateToProps = (state:any, props:any) => {
        return {
            //members: getActiveProjectMembers(state, props),
        };
    }
    return mapStateToProps;
};


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
            <div className="row">
                <div className="form-group col-md-3">
                    <button onClick={(e) => handleSearchForQuotes({})} >Search</button>
                </div>
            </div>
        </div>
    )
}

export default  connect(makeMapStateToProps, {handleSearchForQuotes:quoteSearch})(QuoteSearchList);
// export default  connect(null, null)(QuoteSearchList);
// export default QuoteSearchList;

