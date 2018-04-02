import ISignInAction from "./auth/ISignInAction";
import ISignOutAction from "./auth/ISignOutAction";

type ActionTypes = 
    | ISignInAction
    | ISignOutAction;

export default ActionTypes;