import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
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

const getRandomImage = (min: number, max: number) => {
    return Math.floor(min + Math.random() * (max - min));
}

const LoginView = (props: any) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <img className="img-responsive img-rounded" src={`content/images/login-image-${getRandomImage(1, 6)}.jpg`} />
                </div>
                <div className="col-sm-5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(LoginView);