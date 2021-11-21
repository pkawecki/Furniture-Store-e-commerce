import React from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const validation = event => {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
      window.alert('Hasła powinny być takie same.');
      event.preventDefault();
      return false;
    } else if (
      password === confirmPassword &&
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmPassword.length >= 3
    ) {
      return true;
    } else if (
      password === confirmPassword &&
      firstName.length < 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmPassword.length >= 3
    ) {
      window.alert('Imię powinno zawierać co najmniej 3 znaki.');
      event.preventDefault();
      return false;
    } else if (
      password === confirmPassword &&
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length < 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length >= 3 &&
      confirmPassword.length >= 3
    ) {
      window.alert('Nazwisko powinno zawierać co najmniej 3 znaki.');
      event.preventDefault();
      return false;
    } else if (
      password === confirmPassword &&
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      !email.includes('@') &&
      password.length >= 3 &&
      confirmPassword.length >= 3
    ) {
      window.alert('E-mail powinien zawierać znak "@".');
      event.preventDefault();
      return false;
    } else if (
      firstName.length >= 3 &&
      firstName.length <= 30 &&
      lastName.length >= 3 &&
      lastName.length <= 30 &&
      email.includes('@') &&
      password.length < 3
    ) {
      window.alert('Hasło powinno zawierać co najmniej 3 znaki.');
      event.preventDefault();
      return false;
    } else {
      window.alert(
        'Bardzo nam przykro, ale dane nie zostały wprowadzone prawidłowo. Prosimy podać prawidłowe dane do rejestracji.'
      );
      event.preventDefault();
      return false;
    }
  };

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleCLickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <form className={styles.formWrapper}>
          <h4>Podaj dane do rejestracji:</h4>
          <div className={styles.fields}>
            <div>
              <input
                className={styles.formBox}
                name='first_name'
                type='text'
                placeholder='Imię...'
                id='first_name'
                minLength='3'
                maxLength='30'
              ></input>
            </div>
            <div>
              <input
                className={styles.formBox}
                name='last_name'
                type='text'
                placeholder='Nazwisko...'
                id='last_name'
                minLength='3'
                maxLength='30'
              ></input>
            </div>
            <div>
              <input
                className={styles.formBox}
                name='email'
                type='email'
                placeholder='E-mail *'
                id='email'
              ></input>
              <p>Wprowadź adres e-mail</p>
            </div>
            <div>
              <input
                className={styles.formBox}
                name='password'
                type={values.showPassword ? 'text' : 'password'}
                placeholder='Hasło *'
                id='password'
                minLength='3'
              ></input>
              <p>Potwierdź swoje hasło</p>
            </div>
            <div>
              <input
                className={styles.formBox}
                name='confirm_password'
                type={values.showPassword ? 'text' : 'password'}
                placeholder='Powtórz hasło *'
                id='confirm_password'
                minLength='3'
              ></input>
              <p className={styles.alert} id='info'></p>
            </div>
          </div>
          <div className={`row ${styles.switchCheckbox}`}>
            <label className={styles.switch}>
              <input type='checkbox' onClick={handleCLickShowPassword} />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <label>
              <h5>Pokaż hasło</h5>
            </label>
          </div>
          <div className={styles.checkboxes}>
            <div className={styles.lightBox}>
              <label className={styles.checkbox}>
                <input type='checkbox'></input>
                Akceptuję warunki <Link to='/'>regulaminu</Link>*
              </label>
            </div>
            <div className={styles.lightBox}>
              <label className={styles.checkbox}>
                <input type='checkbox'></input>
                Tak, tak! Chcę otrzymać JEŻowy newsletter !!!
              </label>
            </div>
          </div>
          <div className='row no-gutters justify-content-between'>
            <Link to='/'>
              <button type='button' className={styles.backButton}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                <span>Wróć</span>
              </button>
            </Link>
            <Link to='/' onClick={validation}>
              <button>Zarejestruj się</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
