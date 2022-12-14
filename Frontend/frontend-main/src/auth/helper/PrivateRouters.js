import React from "react"
import {isAuthenticated} from "./index";
import {Route, Redirect} from "react-router-dom";

const PrivateRouters = ({children,...rest}) => {
    return (
        <Route
            {...rest}
         render={(props) =>{
             isAuthenticated ? (
                     (children)
                 )
                 :
                 (
                     <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: props.location },
                        }}
                     />
                 )
         }}

        />
    )}
export default PrivateRouters