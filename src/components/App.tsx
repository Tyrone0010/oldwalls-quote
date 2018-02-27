import * as React from 'react';
import {Component} from 'react';
import NavBar from '../components/NavBar';
import SideBar from './common/SideBar';

export default class App extends Component {
    render(){
        return (
            <div id="app-container">
                <NavBar/>
                <div id="wrapper">
                    <SideBar/>
                    <main id="page-content-wrapper" role="main">
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}