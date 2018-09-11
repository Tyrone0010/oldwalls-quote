import axios from 'axios';
import {ROOT_URL} from './api';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';
import {ICalculateQuoteModel} from '../interfaces/requestTypes/ICalculateQuoteModel';

export const quoteSearch = (requestModel: IQuoteSearchModel) => {
    return axios({
        method: 'POST',
        url: ROOT_URL + 'api/quotesearch/',
        data:{
            customerFirstName: requestModel.CustomerFirstName,
            CustomerLastName: requestModel.CustomerLastName,
            AddressLine1: requestModel.AddressLine1,
            Postcode: requestModel.Postcode
        },
        headers: {'Content-Type': 'application/json'}
    });
}

export const calculateQuote = (requestModel: ICalculateQuoteModel) => {
    return axios({
        method: 'POST',
        url: ROOT_URL + 'api/calculatequote/',
        data:{
            weddingDate: requestModel.WeddingDate,
            venueId: requestModel.VenueId,
            adultNumbers: requestModel.AdultNumbers,
            childNumbers: requestModel.ChildNumbers,
            teenNumbers: requestModel.TeenNumbers,
            eveningNumbers: requestModel.EveningNumbers,
            menuSections: requestModel.MenuSections
            },
        headers: {'Content-Type': 'application/json'}
    });
}
