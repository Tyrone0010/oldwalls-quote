import {combineReducers} from 'redux';
import IStoreState from "../store/IStoreState";
import {authenticate} from "./authenticationReducer";
import {customers} from "./entities/customers";
//import {form} from "./quoteForm";
import {reducer as formReducer} from 'redux-form';
// import pendingActions from "./pendingActionsReducer";


const rootReducer = combineReducers<any>({
    authenticate,
    customers,
    form: formReducer,
    // pendingActions
  });

  export default rootReducer;