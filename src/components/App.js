import React, {useEffect, useState} from 'react';
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../hocs/ProtectedRoute";
import { Route, Switch, Redirect } from 'react-router-dom';
import {token} from "../utils/token";
import * as auth from "../utils/auth";
import { useHistory } from 'react-router';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userData, setUserData] = useState({});
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = async () => {
    try {
      const jwt = token.get('mesto');
      if (jwt) {
        const res = await auth.checkToken(jwt);
        setUserData(res.data);
        setLoggedIn(true);
        history.push("/cards");
      }
      } catch(err) {
      console.log({message: `Что-то пошло не так`}, err)
    }
  }

  const onLogin = () => {
    tokenCheck();
    setIsSuccess(true);
  }
  return (
    <Switch>
      <ProtectedRoute path="/cards" loggedIn={loggedIn}>
        <MainPage userData={userData}/>
      </ProtectedRoute>
      <Route path="/signup">
        <Register/>
      </Route>
      <Route path="/signin">
        <Login onLogin={onLogin}/>
      </Route>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/cars"/> : <Redirect to="signin"/>}
      </Route>
    </Switch>
  );
}
export default App;
