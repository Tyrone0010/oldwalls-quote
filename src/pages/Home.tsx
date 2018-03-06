import * as React  from 'react';
import {Component} from 'react';
import HomeView from '../components/home/HomeView';
import Home from '../components/home/Home';

export default class HomePage extends React.Component<any, any>{

    constructor (props: any){
        super(props);
    }

    render() {
        return(
            <HomeView  {...this.props}>
                <Home {...this.props}/>
            </HomeView>
        )
    }
}
