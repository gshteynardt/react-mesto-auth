import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({loggedIn, path, children}) => {
  return loggedIn ? <Route path={path}>{children}</Route> : <Redirect to="/signin" />
}

export default ProtectedRoute;