interface IChosenPackage{
    name: string,
    rateDescription: string,
    date: Date,
    price: number,
    blurb: string,
    imageUrl: string,
    dayOfWeek: string,
    season: string,
}

interface IChosenPackageAction{
    data: IChosenPackage,
    type: string
}

class ChosenPackage implements IChosenPackage {
    name: null;
    rateDescription: null;
    date: null;
    price: null;
    blurb: null;
    imageUrl: null;
    dayOfWeek: null;
    season: null;

    constructor(){
    }
}

export {IChosenPackage, IChosenPackageAction, ChosenPackage}