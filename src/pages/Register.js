import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import Input from "../components/Input";
import Footer from "../components/Footer";
import register from "../utils/auth";

const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!userData.password && userData.email){
      return;
    }
    try {
      const { email, password } = userData;
      const res = await register(email, password);
      if(res.data) {
        setUserData({
          email: '',
          password: '',
        })
        history.push("/singin")
      }
    } catch (err) {
    }
  }

  return(
    <div className="page">
      <Header/>
      <Form
        title="Регистрация"
        submitText="Зарегистрироваться"
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="popup__input popup__input_theme_dark"
          onChange={handleChange}
          value={userData.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          required
          className="popup__input popup__input_theme_dark"
          value={userData.password}
          onChange={handleChange}
        />
      </Form>
      <Link className="link form__link" to="/signin">Уже зарегистрированы? Войти</Link>
      <Footer/>
    </div>
  )
}

export default Register;