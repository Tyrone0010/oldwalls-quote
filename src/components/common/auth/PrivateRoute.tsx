import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb: any) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             fakeAuth.isAuthenticated ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: "/login",
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     />
// );