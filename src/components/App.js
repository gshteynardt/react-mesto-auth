import React, {useState} from 'react';
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  return (
    <Switch>
      <ProtectedRoute path="/cards" loggedIn={loggedIn}>
        <MainPage/>
      </ProtectedRoute>
      <Route path="/signup">
        <Register/>
      </Route>
      <Route path="/signin">
        <Login/>
      </Route>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/cars"/> : <Redirect to="signin"/>}
      </Route>
    </Switch>
  );
}
export default App;
