import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from '../../types/index'
import React, { FunctionComponent } from "react";

const ProtectedRoute: FunctionComponent<RouteProps> = ({ children, ...rest }) => {
  const logged  =
    useSelector((state) => state.userInfo.logged);

  return (
        <Route
          {...rest}
          render={({ location }) => (logged ? children : <Redirect to={{ pathname: '/', state: { from: location } }} />)}
        />   
  );
}

export default ProtectedRoute;