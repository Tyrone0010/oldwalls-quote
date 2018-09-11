import { createSelector } from 'reselect';

const getContactDetails =  (state:any, props:any) =>{
    const contactDetails = {
        houseNameNumber: state.quoteForm.houseNameNumber,
        street: state.quoteForm.street,
        address2: state.quoteForm.address2,
        townCity: state.quoteForm.townCity,
        postcode: state.quoteForm.postcode,
        email: state.quoteForm.email,
        telephoneHome: state.quoteForm.telephoneHome,
        telephoneMobile: state.quoteForm.telephoneMobile
    } 
    return contactDetails;
}

const getGuestNumbers =  (state:any, props:any) =>{
    const guestNumbers = {
        adultNumbers: state.quoteForm.adultNumbers,
        childNumbers: state.quoteForm.childNumbers,
        teenNumbers: state.quoteForm.teenNumbers,
        eveningNumbers: state.quoteForm.eveningNumbers
    } 
    return guestNumbers;
}

const getQuoteSummary = (state:any, props:any) => {
    return state.summaryResult ? state.summaryResult : {};
}

const getIsQuoteCalculationRequested = (state:any, props:any) => {
    return state.calculationRequested;
}

export const makeGetContactDetails= () => {
    return createSelector(
        [getContactDetails],
        (contactDetails) => {
            return  contactDetails;
        }
    )
}

export const makeGetGuestNumbers= () => {
    return createSelector(
        [getGuestNumbers],
        (guestNumbers) => {
            return  guestNumbers;
        }
    )
}

export const makeGetQuoteSummary = () => {
    return createSelector(
        [getQuoteSummary],
        (quoteSummary) => {
            return  quoteSummary;
        }
    )
}

export const makeGetIsQuoteCalculationRequested = () => {
    return createSelector(
        [getIsQuoteCalculationRequested],
        (isQuoteCalculationRequested) => {
            return  isQuoteCalculationRequested;
        }
    )
}