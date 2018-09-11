import initialState from "../initialState";
import {SIGN_IN} from '../../constants/auth'
import {ICustomer} from '../../interfaces/entities/ICustomer'
const INITIAL_STATE:ICustomer = {firstName: '', middleNames: '', surname: ''};

export const customers = (state = INITIAL_STATE, action:any) => {
  let newState;

  switch (action.type) {
    case SIGN_IN:
      newState = {...state};
      newState.firstName = action.firstName;
      newState.middleNames = action.middleNames;
      newState.surname = action.surname;
      return newState;
    default:
      return state;
  }
}