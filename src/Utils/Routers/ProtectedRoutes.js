import React from "react";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} 
    render={props => {
      const token = localStorage.getItem("awesomeToken");    
      console.log(token)  
      if (token) { 
        if(props.location.pathname === "/auth" || props.location.pathname === "/"){ 
            return <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
          }else{
            return <Component {...props} />;
          }
      } else {
        if(props.location.pathname === "/auth"){
          return <Component {...props} />;
        }else{ 
          return <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
        }
      }
    }}
  />
);

export default ProtectedRoute;
