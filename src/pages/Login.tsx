import * as React  from 'react';
import {Component} from 'react';
import LoginView from '../components/authentication/LoginView';
import Login from '../components/authentication/Login';

export default class LoginPage extends Component{

    render() {
        return(
            <LoginView>
                <Login/>
            </LoginView>
        )
    }
}
