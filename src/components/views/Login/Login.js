import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root + ' mx-auto'}>
      <div className='container p-0'>
        <form className='d-flex flex-column justify-content-center'>
          <p className='m-2'>Email</p>
          <input type='text' className='py-2 mx-2' />
          <p className='m-2'>Hasło</p>
          <input type='text' className='py-2 mx-2' />
        </form>
        <p className={'m-2 ' + styles.forgotPassword}>
          Nie pamiętasz hasła? <a href='#'>Przypomnij hasło.</a>
        </p>
        <a
          className={'d-flex justify-content-center mx-auto m-3 ' + styles.button}
          href='/'
        >
          Zaloguj się
        </a>
      </div>
    </div>
  );
};

export default Login;
