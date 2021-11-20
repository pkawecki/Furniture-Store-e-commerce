import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const adminUser = {
    email: 'admin',
    password: 'pass',
  };

  const [user, setUser] = useState({ name: '', email: '' });
  const [errorMail, setErrorMail] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const Login = details => {
    // console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      // console.log('Logged in');
      setUser({
        name: details.email,
      });
    } else {
      setErrorMail('');
      setErrorPass('');
      if (details.password !== adminUser.password) {
        setErrorPass('Hasło jest błędne!');
        if (details.email !== adminUser.email) {
          setErrorMail('Mail jest błędny!');
        }
      } else if (details.email !== adminUser.email) {
        setErrorMail('Mail jest błędny!');
        if (details.password !== adminUser.password) {
          setErrorPass('Hasło jest błędne!');
        }
      }
    }
  };

  const link = 'http://localhost:3000/';

  return (
    <>
      {user.email !== '' ? (
        window.open(link, '_self')
      ) : (
        <LoginForm Login={Login} errorMail={errorMail} errorPass={errorPass} />
      )}
    </>
  );
};

export default Login;
