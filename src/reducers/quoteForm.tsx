import { combineReducers } from 'redux';
import {
	UPDATE_CONTACT, UPDATE_CUSTOMERS, UPDATE_NUMBERS, RESET_FORM, UPDATE_QUOTE_FORM_FIELD
} from '../constants/quoteForm';
import {IQuoteForm, QuoteForm} from '../interfaces/IQuoteForm';

const INITIAL_STATE:IQuoteForm = new QuoteForm();


const quoteForm = (state = INITIAL_STATE, action: any) => {
    let newState;

	switch(action.type){
  		case UPDATE_CONTACT:
          newState = {...state};
          newState.firstName = action.firstName;
          newState.lastName = action.lastName;
          return newState;
  		case UPDATE_QUOTE_FORM_FIELD:
          newState = {...state};
          updateFormField(newState, action.fieldName, action.fieldValue)
        case RESET_FORM:
  			return newState;

		default:
			return state;
	}
}

const updateFormField = (state:any, fieldName:string, fieldValue:any) => {
    switch(fieldName){
        case "houseNameNumber":
            state.houseNameNumber = fieldValue
            break;
        case "street":
            state.street = fieldValue
            break;
        case "address2":
            state.address2 = fieldValue
            break;
        case "townCity":
            state.townCity = fieldValue
            break;
        case "postcode":
            state.postcode = fieldValue
            break;
        case "email":
            state.email = fieldValue
            break;
        case "telephoneHome":
            state.telephoneHome = fieldValue
            break;
        case "telephoneMobile":
            state.telephoneMobile = fieldValue
            break;
        default:
            break;
    }
}

export {quoteForm}