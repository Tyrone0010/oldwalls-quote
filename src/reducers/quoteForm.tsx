import {
	UPDATE_CONTACT, UPDATE_CUSTOMERS, UPDATE_NUMBERS, RESET_FORM, UPDATE_QUOTE_FORM_FIELD
} from '../constants/quoteForm';
import {CALCULATE_QUOTE_FAILURE, CALCULATE_QUOTE_REQUEST, CALCULATE_QUOTE_SUCCESS} from '../constants/quoteForm'
import {IQuoteForm, QuoteForm} from '../interfaces/IQuoteForm';
import { MenuSummaryModel, IMenuSummaryModel } from '../interfaces/IMenuSummaryModel';

const INITIAL_STATE:IQuoteForm = new QuoteForm();


const quoteForm = (state = INITIAL_STATE, action: any) => {
    let newState:IQuoteForm;

	switch(action.type){
  		case UPDATE_CONTACT:
          newState = {...state};
          newState.firstName = action.firstName;
          newState.lastName = action.lastName;
          return newState;
  		case UPDATE_QUOTE_FORM_FIELD:
          newState = {...state};
          updateFormField(newState, action.fieldName, action.fieldValue)
          return newState;
        case RESET_FORM:
              return newState;
        case CALCULATE_QUOTE_REQUEST:
            newState = {...state};
            newState.calculationRequested = true;
            return newState;
        case CALCULATE_QUOTE_SUCCESS:
            newState = INITIAL_STATE;
            newState.calculationRequested = false;
            newState.quoteSummary.venueName = action.data.venueName;
            newState.quoteSummary.venuePrice = action.data.venuePrice;
            newState.quoteSummary.totalPrice = action.data.totalPrice;
            action.data.menus.forEach((menu:any) => {
                var menuVm:IMenuSummaryModel = new MenuSummaryModel();
                menuVm.menuName = menu.menuName;
                menuVm.price = menu.price;
                menuVm.sectionName = menu.sectionName;
                newState.quoteSummary.menuSummaries.push(menuVm)
            });
            return newState;
		default:
			return state;
	}
}

const updateFormField = (state:any, fieldName:string, fieldValue:any) => {
    switch(fieldName){
        case "adultNumbers":
            state.adultNumbers = fieldValue
            break;
        case "childNumbers":
            state.childNumbers = fieldValue
            break;
        case "teenNumbers":
            state.teenNumbers = fieldValue
            break;
        case "eveningNumbers":
            state.eveningNumbers = fieldValue
            break;
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