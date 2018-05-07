import initialState from "./initialState";
import {SIGN_IN} from '../constants/auth'
const INITIAL_STATE = {isAuthenticated: false, token: ''};

export const authenticate = (state = INITIAL_STATE, action:any) => {
  let newState;

  switch (action.type) {
    case SIGN_IN:
      newState = {...state};
      newState.token = action.token;
      return newState;
    default:
      return state;
  }
}

export const isLoggingIn = (state: any) => {
  if(state.isLoggingIn){
    return true;
  }
  return false;
}