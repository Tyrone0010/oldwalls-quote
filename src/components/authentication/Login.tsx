import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {signIn} from '../../actions/auth/authenticate';
import IStoreState from '../../store/IStoreState';


const makeMapStateToProps = (state: IStoreState, props: any) => {
    return {
        //islogging in
        //error
    };
}

const makeMapDispatchToProps = (dispatch: Dispatch<IStoreState>, state : any) => {
    return {
        signInAction : signIn,
    };
}

class Login extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        this.state = {
            username: '',
            password: ''
          };
          this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:any) {
        debugger;
        var key = e.target.id;
        var val = e.target.value;
        var obj:any  = {}
        obj[key] = val
        this.setState(obj)
        // this.setState({
        //     [e.target.id] : e.target.value
        // });
    }

    handleLogin() {

    }

    render(){
        const {history, signIn} = this.props;

        return (
            <div>
                <h1>Login to continue</h1>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="username">Email or Username</label>
                        <input id="username" 
                            className="form-control" 
                            type="text" 
                            value={ this.state.username }
                            onChange={ this.handleChange } 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="password">Password</label>
                        <input id="password" 
                            className="form-control" 
                            type="password" 
                            value={ this.state.password }
                            onChange={ this.handleChange } 
                        />
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-outline-light" onClick={this.props.signInAction(this.state.username, this.state.password)}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(Login);