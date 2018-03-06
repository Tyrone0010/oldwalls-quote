import * as React from "react"
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router-dom"
import fakeAuth from '../../actions/auth/authenticate';

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

export const PrivateRoute: React.StatelessComponent<RouteProps> = ({component: Component, ...rest} : any) => {
    const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
        if(!Component){
            return null;
        }
        if(fakeAuth.isAuthenticated()){
            return <Component {...props} />
        }
        const redirectProps = {
            to: {
                pathname: "/login",
                state: {from: props.location},

            }
        }

        return <Redirect {...redirectProps} />
    }

    return <Route {...rest} render={renderFn(Component)} />
}


// const PrivateRoute = ({ {component = Component}:{component: any}, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//     )} />
// )