import React, { useState } from 'react';
import styles from './Login.module.scss';
import PropTypes from 'prop-types';

const LoginForm = ({ Login, errorMail, errorPass }) => {
  const [details, setDetails] = useState({ email: '', password: '' });

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div onSubmit={submitHandler}>
      <div className={styles.root + ' mx-auto'}>
        <div className='container p-0'>
          <form className='d-flex flex-column justify-content-center'>
            <p className='m-2' htmlFor='name'>
              Email
            </p>
            <input
              type='text'
              className='py-2 mx-2'
              name='name'
              id='name'
              onChange={e => setDetails({ ...details, email: e.target.value })}
              value={details.email}
            />
            <p className='m-2' htmlFor='password'>
              Hasło
            </p>
            <input
              type='password'
              className='py-2 mx-2'
              name='password'
              id='password'
              onChange={e => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
            <p className={'m-2 ' + styles.forgotPassword}>
              Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>
            </p>
            {errorMail !== '' ? (
              <div
                className={'d-flex justify-content-center mx-auto m-3 ' + styles.error}
              >
                {errorMail}
              </div>
            ) : (
              ''
            )}
            {errorPass !== '' ? (
              <div
                className={'d-flex justify-content-center mx-auto m-3 ' + styles.error}
              >
                {errorPass}
              </div>
            ) : (
              ''
            )}
            <input
              type='submit'
              value='Login'
              className={'d-flex justify-content-center mx-auto m-3 ' + styles.button}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  Login: PropTypes.func,
  errorMail: PropTypes.string,
  errorPass: PropTypes.string,
};

export default LoginForm;
