import * as React  from 'react';
import {Component} from 'react';
import HomeView from '../components/home/HomeView';
import Home from '../components/home/Home';

export default class HomePage extends Component{

    render() {
        return(
            <HomeView>
                <Home/>
            </HomeView>
        )
    }
}
