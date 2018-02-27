import * as React  from 'react';
import {Component} from 'react';
import QuoteView from '../components/quote/QuoteView';
import Quote from '../components/quote/Quote';

export default class QuotePage extends Component{

    render() {
        return(
            <QuoteView>
                <Quote />
            </QuoteView>
        )
    }
}
