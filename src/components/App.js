import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import MainPage from '../pages/MainPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../hocs/ProtectedRoute';
import { token } from '../utils/token';
import * as auth from '../utils/auth';
import InfoTooltip from './InfoTooltip';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
        if (res.data) {
          setUserData(res.data);
          setLoggedIn(true);
          history.push('/cards');
        } else if (res.message) {
          console.log({ message: `${res.message}` });
        }
      }
    } catch (err) {
      console.log({ message: 'Что-то пошло не так' }, err);
    }
  };

  const onLogin = () => {
    tokenCheck();
  };

  // закрытие popup
  const closeInfoPopup = () => {
    setIsOpen(false);
  };

  const onSuccessPopup = (boolean) => {
    setIsOpen(true);
    setIsSuccess(boolean);
  };

  const offSuccessPopup = (boolean) => {
    setIsOpen(true);
    setIsSuccess(boolean);
  };

  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/cards"
          loggedIn={loggedIn}
        >
          <MainPage userData={userData}/>
        </ProtectedRoute>
        <Route path="/signup">
          <Register
            isSuccess={onSuccessPopup}
            unSuccess={offSuccessPopup}
          />
        </Route>
        <Route path="/signin">
          <Login onLogin={onLogin}/>
        </Route>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/cars"/> : <Redirect to="signin"/>}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <InfoTooltip
        isSuccess={isSuccess}
        isOpen={isOpen}
        onClose={closeInfoPopup}
      />
    </>
  );
};

export default App;
