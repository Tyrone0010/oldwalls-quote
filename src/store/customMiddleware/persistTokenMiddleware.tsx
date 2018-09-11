import {SIGN_IN, TOKEN_INIT, TOKEN_RECEIVE, VERIFY_TOKEN} from '../../constants/auth';
import * as api from '../../api/auth';
import jwt from 'jsonwebtoken';

export const persistTokenMiddleware = (store:any) => (next:any) => (action:any) => {

    switch(action.type) {

    case SIGN_IN:
        localStorage.setItem('TOKEN', action.token);
        break;

    case VERIFY_TOKEN:
        // const token = localStorage.getItem('TOKEN');
        // jwt.verify(token,)
        // api.verify().then((response:any) => {
        //     if(response.status) {
        //         // if you also want to refresh your token, do it here
        //         // dispatch a new action with the token
        //         next({
        //             type: TOKEN_RECEIVE,
        //             token: localStorage.getItem('TOKEN')
        //         });
        //     }
        // });
        break;
  
    case TOKEN_RECEIVE:
        localStorage.setItem('TOKEN', action.token);
        break;  
    }
  
    return next(action);
  };