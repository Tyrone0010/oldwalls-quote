import {SEARCH_RESULTS_FAILURE, SEARCH_RESULTS_SUCCESS} from '../../constants/quotes'
import {IQuote} from '../../interfaces/entities/IQuote'
const INITIAL_STATE:IQuote[] = [];

export const quotes = (state = INITIAL_STATE, action:any) => {
  let newState;

  switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
      newState = {...state};
      return newState;
    case SEARCH_RESULTS_FAILURE:
      newState = {...state};
      return newState;
    default:
      return state;
  }
}