import * as React from 'react';
import auth from '../../actions/auth/authenticate';

export default class Login extends React.Component<any, any>{

    constructor(props: any){
        super(props);
    }

    render(){
        const {history} = this.props;
        return (
            <div>
                <h1>Login to continue</h1>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="userEmail">Email or Username</label>
                        <input id="userEmail" className="form-control" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="password">Password</label>
                        <input id="password" className="form-control" type="password" />
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-outline-light" onClick={e => {auth.authenticate(null, history)}}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}