import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import configureStore from "../src/store/configureStore";


export default (routes: any) => {
    const store = configureStore({})
    ReactDom.render(
        <Provider store={store}>
            <Router>
                {...routes}
            </Router>
        </Provider>
        ,document.getElementById('root')
    )
}

