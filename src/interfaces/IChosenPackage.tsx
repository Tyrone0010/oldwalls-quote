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

export {IChosenPackage, IChosenPackageAction}