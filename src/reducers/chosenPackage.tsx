import {
	CHOSEN_PACKAGE_FAILURE, CHOSEN_PACKAGE_SUCCESS
} from '../constants/chosenPackage';
import {IChosenPackage, IChosenPackageAction} from '../interfaces/IChosenPackage';

const INITIAL_STATE:IChosenPackage = {
    blurb: "",
    date: new Date(),
    dayOfWeek:"",
    imageUrl:"",
    name: "",
    price:0,
    rateDescription:"",
    season:""
};


const chosenPackage = (state = INITIAL_STATE, action: any) => {
    let newState;

	switch(action.type){
        case CHOSEN_PACKAGE_SUCCESS:
        //return the state to its original value
        newState = INITIAL_STATE;
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