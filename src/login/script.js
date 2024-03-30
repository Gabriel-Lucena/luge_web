'use strict';

const username = document.getElementById('username');
const password = document.getElementById('password');

const limparFormulario = () => {
  username.value = '';
  password.value = '';
}

const realizarLogin = async (username, password) => {
  fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
    .then((response) => response.json())
    .then((json) => alert(json));

  limparFormulario();
}

document.getElementById('submit').addEventListener('click', function () {
  realizarLogin(username.value, password.value);
})