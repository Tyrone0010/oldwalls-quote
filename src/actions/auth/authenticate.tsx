import {SIGN_IN, SIGNING_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, VERIFY_TOKEN} from '../../constants/auth';
import {isLoggingIn} from '../../reducers/authenticationReducer';
import * as api from '../../api/auth';
import {handleResponse} from '../../utilities/response';
import {handleToastrError} from '../../utilities/error';

//Section Log in
export const signIn = (username:string, password:string) => (dispatch: any) => {

    // if(isLoggingIn(getState())){
    //     return Promise.resolve();
    // }

    return dispatch(performActionSetLoggingIn()).then(() => {
        return api.signIn(username,password).then(
            response => {
                handleResponse(response,
                    (data: any)=> { dispatch(performActionLogInSuccess(data));},
                    (error: any)=> { return dispatch(performActionLogInFailure(error).then(() => {
                        handleToastrError(error);
                    }))
                })
            }
        );
    })
};

const performActionSetLoggingIn = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SIGNING_IN
        });
    })
};

const performActionLogIn = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SIGNING_IN
        });
    })
};


const performActionLogInSuccess = (token: string) => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SIGN_IN_SUCCESS,
            token: token
        });
    })
};

const performActionLogInFailure = (error:any) => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: SIGN_IN_FAILURE,
            error: error
        });
    })
};

//Section verify login
export const verify = () => (dispatch: any, getState:any) => {

    // if(isLoggingIn(getState())){
    //     return Promise.resolve();
    // }

    return dispatch(performActionSetLoggingIn()).then(() => {

        })
};

const performActionVerifytoken = () => {
    return new Promise((resolve:any, reject:any) => {
        resolve({
            type: VERIFY_TOKEN
        });
    })
};


