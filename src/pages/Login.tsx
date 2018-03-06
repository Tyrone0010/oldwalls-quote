import * as React  from 'react';
import {Component} from 'react';
import LoginView from '../components/authentication/LoginView';
import Login from '../components/authentication/Login';

export default class LoginPage extends React.Component<any, any>{

    constructor (props: any){
        super(props);
    }

    render() {
        return(
            <LoginView  {...this.props}>
                <Login {...this.props} />
            </LoginView>
        )
    }
}
