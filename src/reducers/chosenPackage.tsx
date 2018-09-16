import {
	CHOSEN_PACKAGE_FAILURE, CHOSEN_PACKAGE_SUCCESS
} from '../constants/chosenPackage';
import {IChosenPackage, ChosenPackage} from '../interfaces/IChosenPackage';

const INITIAL_STATE:IChosenPackage = null;


const chosenPackage = (state = INITIAL_STATE, action: any) => {
    let newState;

	switch(action.type){
        case CHOSEN_PACKAGE_SUCCESS:
            newState = new ChosenPackage();
            if(action.data){
                newState.blurb = action.data.Blurb;
                newState.date = action.data.Date;
                newState.imageUrl = action.data.ImageUrl;
                newState.name = action.data.Name;
                newState.price = action.data.Price;
                newState.rateDescription = action.data.RateDescription;
                newState.dayOfWeek = action.data.Day;
            }
            return newState;
		default:
			return state;
	}
}



export {chosenPackage}