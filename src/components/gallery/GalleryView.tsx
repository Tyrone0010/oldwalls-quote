import * as React from 'react';
import App from '../App';

export default (props: any) => {
    return(
        <App>
            {props.children}
        </App>
    )
}