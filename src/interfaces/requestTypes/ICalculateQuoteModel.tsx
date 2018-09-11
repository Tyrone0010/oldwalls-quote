interface ICalculateQuoteModel{
    WeddingDate: string,
    VenueId: number,
    AdultNumbers: number,
    ChildNumbers: number,
    TeenNumbers: number,
    EveningNumbers: number,
    MenuSections: any
}

class CalculateQuoteModel implements ICalculateQuoteModel {
    WeddingDate = '';
    VenueId = 0;
    AdultNumbers = 0;
    ChildNumbers = 0;
    TeenNumbers = 0;
    EveningNumbers = 0;
    MenuSections = new Array;

    constructor(){
    }
}

export {ICalculateQuoteModel, CalculateQuoteModel}