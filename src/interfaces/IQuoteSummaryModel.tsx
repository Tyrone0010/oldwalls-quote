import {MenuSummaryModel, IMenuSummaryModel} from './IMenuSummaryModel'

interface IQuoteSummaryModel{
    venueName: string,
    venuePrice: number,
    totalPrice: number,
    weddingDate: string,
    menuSummaries: IMenuSummaryModel[],
}

class QuoteSummaryModel implements IQuoteSummaryModel {
    venueName: '';
    venuePrice: 0;
    totalPrice: 0;
    menuSummaries: MenuSummaryModel[] = [];
    weddingDate: '01/01/2000';
    
    constructor(){
    }
}


export {IQuoteSummaryModel, QuoteSummaryModel}