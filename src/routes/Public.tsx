import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import QuotePage from '../pages/Quote';

export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/gallery",
        component: Gallery
    },
    {
        path: "/quote",
        component: QuotePage
    }
]


