import * as React  from 'react';
import {Component} from 'react';
import QuoteView from '../components/quote/QuoteView';
import Quote from '../components/quote/Quote';


export default class QuotePage extends React.Component<any, any>{

    constructor (props: any){
        super(props);
    }

    render() {
        return(
            <QuoteView {...this.props}>
                <Quote {...this.props} />
            </QuoteView>
        )
    }
}
