import {combineReducers} from 'redux';
import IStoreState from "../store/IStoreState";
import {authenticate} from "./authenticationReducer";
import {chosenPackage} from './chosenPackage';
import {customers} from "./entities/customers";
//import {form} from "./quoteForm";
import {reducer as formReducer} from 'redux-form';
import {menus} from "./entities/menus";
import {menuSections} from './entities/menuSections'
import {menuItems} from './entities/menuItems'
import quote from './entities/quote'
import {quoteForm} from './quoteForm'
import selectedMenuList from './selectedMenuList'
// import pendingActions from "./pendingActionsReducer";
import {venues} from './entities/venues'
import venueList from './venueList'
import wizard from './wizard'


const rootReducer = combineReducers<any>({
    authenticate,
    chosenPackage,
    customers,
    form: formReducer,
    menus: menus,
    menuItems: menuItems,
    menuSections: menuSections,
    quote: quote,
    quoteForm: quoteForm,
    selectedMenuList: selectedMenuList,    
    // pendingActions
    venues: venues,
    venueList: venueList,
    wizard: wizard
  });

  export default rootReducer;