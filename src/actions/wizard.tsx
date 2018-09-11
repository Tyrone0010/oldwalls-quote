import * as schemas from '../schemas';
import {normalize} from 'normalizr';
import * as api from '../api/venues';
import {handleResponse} from '../utilities/response';
import {handleToastrError} from '../utilities/error';
import {WIZARD_STEP_NEXT, WIZARD_STEP_PREVIOUS} from '../constants/quotes';

export const setNextStep = () => (dispatch:any, getState:any) => {
  
    dispatch(setNextStepDispatcher())
}

export const setPreviousStep = () => (dispatch:any, getState:any) => {
  
    dispatch(setPreviousStepDispatcher())
}

const setNextStepDispatcher = () => {
    return {
            type: WIZARD_STEP_NEXT,
    };
};

const setPreviousStepDispatcher = () => {
    return {
            type: WIZARD_STEP_PREVIOUS,
    };
};
