import * as React  from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component{

    render() {
        return(
            <div id="sidebar-wrapper">
                <aside id="sidebar">
                    <ul id="sidemenu" className="sidebar-nav">
                        <li>
                            <Link to="/home">
                                <span className="sidebar-icon"><i className="fa fa-dashboard"></i></span>
                                <span className="sidebar-title">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/quote">
                                <span className="sidebar-icon"><i className="fa fa-birthday-cake"></i></span>
                                <span className="sidebar-title">Wedding Estimation</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery">
                                <span className="sidebar-icon"><i className="fa fa-picture-o"></i></span>
                                <span className="sidebar-title">Gallery</span>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}
