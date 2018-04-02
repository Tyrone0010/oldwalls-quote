import {History} from 'history';
import {homePath, quotePath} from "../../routes/publicPaths";
import keys from "../ActionTypeKeys";
import ISignInAction from "./ISignInAction";
import ISignOutAction from "./ISignOutAction";

export function signIn(history: History): ISignInAction {
    history.push(quotePath);

    return {
        type: keys.SIGN_IN
    }
}

export function signOut(history: History): ISignOutAction {
    history.push(homePath);
  
    return {
      type: keys.SIGN_OUT
    };
  }
