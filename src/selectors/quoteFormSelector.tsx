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

export const makeGetContactDetails= () => {
    return createSelector(
        [getContactDetails],
        (contactDetails) => {
            return  contactDetails;
        }
    )
}