import React from "react";

import Header from "../components/Header";
import Form from "../components/Form";
import Input from "../components/Input";
import Footer from "../components/Footer";


const Login = () => {
  return(
  <div className="page page__form">
    <Header/>
    <Form
      title={"Вход"}
      submitText={"Войти"}
    >
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="popup__input popup__input_theme_dark"
      />

      <Input
        name="password"
        type="password"
        placeholder="Пароль"
        required
        className="popup__input popup__input_theme_dark"
      />
    </Form>
    <Footer/>
  </div>
  )
}

export default Login