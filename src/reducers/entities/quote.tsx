import {RESET_QUOTE, ADD_CUSTOMER, ADD_CUSTOMER_ADDRESS} from '../../constants/quote'
import {IQuote} from '../../interfaces/entities/IQuote'
import {IQuoteForm} from '../../interfaces/IQuoteForm'
const INITIAL_STATE:any = {};

export default (state = INITIAL_STATE, action:any) => {
  let newState;

  switch (action.type) {
    case RESET_QUOTE:
      newState = {};
      return newState;
    case ADD_CUSTOMER:
      newState = state;
      addCustomer(newState, action.customer);
      return newState;
    case ADD_CUSTOMER_ADDRESS:
      newState = state;
      addUpdateCustomerAddress(newState, action.customerAddress);
    default:
      return state;
  }
}

const addCustomer = (quote:any, customer:any) => {
  if(!quote.customers){
    quote.customers = [];
  }
  quote.customers.push(customer);
}

const addUpdateCustomerAddress = (quote:any, customerAddress: IQuoteForm) => {
  if(!quote.customerAddress){
    quote.customerAddress = {}
  }

  quote.customerAddress.houseNumberName = customerAddress.houseNumberName;
  quote.customerAddress.streetName = customerAddress.streetName;
  quote.customerAddress.addressLine2 = customerAddress.addressLine2;
  quote.customerAddress.townCity = customerAddress.townCity;
  quote.customerAddress.postcode = customerAddress.postcode;
  quote.customerAddress.email = customerAddress.email;
  quote.customerAddress.telephoneHome = customerAddress.telephoneHome;
  quote.customerAddress.telephoneMobile = customerAddress.telephoneMobile;
}