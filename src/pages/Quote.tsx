import * as React  from 'react';
import {Component} from 'react';
import QuoteView from '../components/quote/QuoteView';
import Quote from '../components/quote/Quote';
import {getUserVenues} from '../actions/venues'
import { connect } from 'react-redux'

class QuotePage extends React.Component<any, any>{

    constructor (props: any){
        super(props);
    }

    componentWillMount(){
        this.props.getUserVenues();
    }

    render() {
        return(
            <QuoteView {...this.props}>
                <Quote {...this.props} />
            </QuoteView>
        )
    }
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state:any, props:any) => {
        return {
        };
    }
    return mapStateToProps;
}

export default connect(makeMapStateToProps, {getUserVenues})(QuotePage);
