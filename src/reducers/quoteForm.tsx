import { combineReducers } from 'redux';
import {
	UPDATE_CONTACT, UPDATE_CUSTOMERS, UPDATE_NUMBERS, RESET_FORM
} from '../constants/quoteForm';
import {IQuoteForm} from '../interfaces/IQuoteForm';
import Factory from '../utilities/factory';

let factory = new Factory();
let quoteForm;
let person = factory.create<IQuoteForm>(quoteForm);

const INITIAL_STATE:IQuoteForm = {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    adultNumbers: 0,
    childNumbers: 0,
    eveningNumbers: 0,
    teenNumbers: 0,
    houseNumberName: '',
    townCity: '',
    postcode: '',
    firstName: '',
    lastName: '',
    email: '',
    telephoneHome: '',
    telephoneMobile: ''
};


const form = (state = INITIAL_STATE, action: any) => {
    let newState;

	switch(action.type){
  		case UPDATE_CONTACT:
          newState = {...state};
          newState.firstName = action.firstName;
          newState.lastName = action.lastName;
          return newState;
        
        case RESET_FORM:
  			return newState;

		default:
			return state;
	}
}

export {form}