import * as React from "react"
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
//import {authenticate} from '../../actions/auth/authenticate'

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

export const PrivateRoute: React.StatelessComponent<RouteProps> = ({component: Component, ...rest} : any) => {
    const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
        if(!Component){
            return null;
        }

        // if(true){ //use the verify method to get this answer
            return <Component {...props} />
        // }
        
        // const redirectProps = {
        //     to: {
        //         pathname: "/login",
        //         state: {from: props.location},

        //     }
        // }

        // return <Redirect {...redirectProps} />
    }

    return <Route {...rest} render={renderFn(Component)} />
}