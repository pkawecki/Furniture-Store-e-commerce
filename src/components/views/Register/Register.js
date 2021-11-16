import React from 'react';
import styles from './Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '../../common/ToggleButton/ToggleButton';

const Register = () => {
  return (
    <div className={styles.root + ' mx-auto'}>
      <div className='container'>
        <form className='row col-10'>
          <div className='col-6 p-2'>
            <input type='radio' />
            <label className={'p-3 ' + styles.account}>Mam konto</label>
          </div>
          <div className='col-6 p-2'>
            <input type='radio' />
            <label className={'p-3 ' + styles.account}>Nie mam konta</label>
          </div>
        </form>
        <div>
          <p className={'p-3 ' + styles.header}>Podaj dane do rejestracji</p>
        </div>
        <form className='col'>
          <input
            type='text'
            placeholder='email *'
            className='ml-0 m-3 p-2 col-8'
          ></input>
          <br />
          <input type='text' placeholder='hasło *' className='m-3 p-2 col-8'></input>
          <br />
          <input
            type='text'
            placeholder='Powtórz hasło *'
            className='m-3 p-2 col-8'
          ></input>
        </form>
        <div className='col-6 float-right'>
          <ToggleButton />
          <span className='p-2'>Pokaż hasło</span>
        </div>
        <form className={'col-12 float-right mb-5 ' + styles.checkboxWrapper}>
          <input type='checkbox' />
          <label className={styles.firstCheckbox + ' p-2 ' + styles.checkboxLabel}>
            Zaznacz wszystkie
          </label>
          <br />
          <input type='checkbox' />
          <label className={'p-2 ' + styles.checkboxLabel}>
            Akceptuje warunki <span>regulaminu</span> *
          </label>
          <br />
          <input type='checkbox' />
          <label className={'p-2 ' + styles.checkboxLabel}>
            Tak, tak! Chcę otrzymywać JEŻowy newsletter
          </label>
          <br />
        </form>
        <div className='row justify-content-between col-9 my-5'>
          <a className='col-2' href='/home'>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            <span className='p-2'>wróć</span>
          </a>
          <a className='col-3'>
            <a href='/' className={styles.button}>
              Zarejestruj się
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
