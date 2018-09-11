import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import App from '../App';
import IStoreState from '../../store/IStoreState';

const makeMapStateToProps = (state: IStoreState) => {
    return {

    };
}

const makeMapDispatchToProps = (dispatch: Dispatch<IStoreState>) => {
    return {

    };
}

class Home extends React.Component<any, any>{

    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <div>
                this is the home view
            </div>
        )
    }
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(Home);