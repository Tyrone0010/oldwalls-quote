import { createSelector } from 'reselect';

export const packageSelector =  (state:any, props:any) =>{
    return  state.chosenPackage ? state.chosenPackage : null;
}


export const makeGetChosenPackage= () => {
    return createSelector(
        [packageSelector],
        (chosenPackage) => {
            return  chosenPackage;
        }
    )
}

export const makeGetIsChosenPackageLoaded = () => {
    return createSelector(
        [packageSelector],
        (chosenPackage) => {
            return chosenPackage ? true : false;
        }
    )
}