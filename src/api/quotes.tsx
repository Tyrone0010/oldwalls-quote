import axios from 'axios';
import {ROOT_URL} from './api';
import {IQuoteSearchModel} from '../interfaces/requestTypes/IQuoteSearchModel';

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
