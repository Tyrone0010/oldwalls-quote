import {IQuoteSummaryModel, QuoteSummaryModel} from './IQuoteSummaryModel';

interface IQuoteForm{
    firstName: string,
    lastName: string,
    houseNumberName: string,
    streetName: string,
    addressLine2: string,
    townCity: string,
    postcode: string,
    email: string,
    telephoneHome: string,
    telephoneMobile: string,
    adultNumbers: number,
    teenNumbers: number,
    eveningNumbers: number,
    childNumbers: number,
    isCalculationRequired: boolean,
    calculationRequested: boolean,
    quoteSummary: IQuoteSummaryModel
}

class QuoteForm implements IQuoteForm {
    firstName: '';
    lastName: '';
    houseNumberName: '';
    streetName: '';
    addressLine2: '';
    townCity: '';
    postcode: '';
    email: '';
    telephoneHome: '';
    telephoneMobile: '';
    adultNumbers: 0;
    teenNumbers: 0;
    eveningNumbers: 0;
    childNumbers: 0;
    isCalculationRequired: true;
    calculationRequested: false;
    quoteSummary: IQuoteSummaryModel;

    constructor(){
        this.quoteSummary = new QuoteSummaryModel();
    }
}


export {IQuoteForm, QuoteForm}