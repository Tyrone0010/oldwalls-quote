import { combineReducers } from 'redux';
import { WIZARD_STEP_NEXT, WIZARD_STEP_PREVIOUS} from '../constants/quotes';


const wizardStep = (state:number = 0, action:any) => {
    var newstate;
    switch(action.type){
        case WIZARD_STEP_NEXT:
            newstate = state + 1;
            return newstate;
        case WIZARD_STEP_PREVIOUS:
            newstate = state -1;
            return newstate;
    default:
            return state;
    }
};


export default combineReducers({
    wizardStep,
});
