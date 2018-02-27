import * as React  from 'react';
import {Component} from 'react';


export default class NavBar extends Component{

    render() {
        return(
            <div id="navbar-wrapper">
                <header>
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="container-fluid">
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
