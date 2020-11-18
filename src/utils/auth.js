export const BASE_URL = 'https://auth.nomoreparties.co';

const register = (email, password) => {
      return fetch(`${BASE_URL}/signup`, {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then(res => res.json);
}

export default register;