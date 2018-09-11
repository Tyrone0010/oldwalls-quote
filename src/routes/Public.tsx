import * as React from 'react';
import HomePage from '../pages/Home';
import QuotePage from '../pages/Quote';
import GalleryPage from '../pages/Gallery';
import LoginPage from '../pages/Login';
import {Route, Switch, Redirect} from 'react-router-dom';
import {PrivateRoute} from '../components/authentication/PrivateRoute';

export default (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/quote" exact component={QuotePage} />
        <Route path="/gallery" exact component={GalleryPage} />
    </Switch>
)


