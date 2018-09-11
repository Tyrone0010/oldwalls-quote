import {MenuSummaryModel, IMenuSummaryModel} from './IMenuSummaryModel'

interface IQuoteSummaryModel{
    venueName: string,
    venuePrice: number,
    totalPrice: number,
    menuSummaries: IMenuSummaryModel[],
}

class QuoteSummaryModel implements IQuoteSummaryModel {
    venueName: '';
    venuePrice: 0;
    totalPrice: 0;
    menuSummaries: MenuSummaryModel[] = [];
    
    constructor(){
    }
}


export {IQuoteSummaryModel, QuoteSummaryModel}