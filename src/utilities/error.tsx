import {toastr} from 'react-redux-toastr';
import {IClientError} from '../interfaces/IClientMessage';

export const handleToastrError = (error : IClientError) => {
    if(error && error.errorMessage){
        toastr.error('Error', error.errorMessage);
        return;
    }
    // if(error.errors && error.errors.length && error.errors.length > 0){
    //     for(let e of error.errors){
    //         toastr.error(e.errorMessage);
    //     }
    // }
};