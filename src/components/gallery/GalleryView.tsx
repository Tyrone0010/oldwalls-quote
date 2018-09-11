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

const GalleryView = (props: any) => {
    return(
        <App>
            {props.children}
        </App>
    )
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(GalleryView);