import * as React from 'react';
import * as ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

export default (routes: any) => {
    ReactDom.render(
        <Router>
            {...routes}
        </Router>
        ,document.getElementById('root')
    )
}

