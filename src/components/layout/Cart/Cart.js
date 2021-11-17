/* eslint-disable no-console */

import {
  faGreaterThan,
  faHome,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import styles from './Cart.module.scss';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  font-family: monospace;
`;

//dfg
const CompanyClaim = () => (
  <div className={styles.root}>
    <div className={styles.containerWrapper}>
      <div className='container'>
        <div className={`row ${styles.row}`}>
          <p>The Templace</p>
        </div>
      </div>
    </div>
    <div className={styles.containerWrapper}>
      <div className='container'>
        <div className={`row ${styles.row} ${styles.rowsecond}`}>
          <p>Cart</p>
          <span>
            <a href='/'>
              <FontAwesomeIcon className={styles.homeIcon} icon={faHome} />
            </a>
            <FontAwesomeIcon className={styles.greaterThanIcon} icon={faGreaterThan} />
            Cart
          </span>
        </div>
      </div>
    </div>
    <div className={styles.containerWrapper}>
      <div className='container' align='center'>
        <div className='row justify-content-center'>
          <div className='col-12 '>
            <table className='table'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'></th>
                  <th scope='col'>Product</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='align-middle'>
                    <button onClick={() => console.log('remove item')}>
                      <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                    </button>
                  </td>
                  <td>
                    <div
                      style={{ width: '40px', height: '40px', background: 'gray' }}
                    ></div>
                  </td>
                  <td>Placeholder Product 1</td>
                  <td className={styles.priceTag}>$ 5.00</td>
                  <td>
                    <div>
                      <Button onClick={() => console.log('clicked')}>-</Button>
                      <span className={styles.quantity}> 0 </span>
                      <Button>+</Button>
                    </div>
                  </td>
                  <td className={styles.priceTag}> $ 5.00</td>
                </tr>
                <tr>
                  <td className='align-middle'>
                    <button onClick={() => console.log('remove item')}>
                      <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                    </button>
                  </td>
                  <td>
                    <div
                      style={{ width: '40px', height: '40px', background: 'gray' }}
                    ></div>
                  </td>
                  <td>Placeholder Product 2</td>
                  <td className={styles.priceTag}>$ 5.00</td>
                  <td>
                    <div>
                      <Button>-</Button>
                      <span className={styles.quantity}> 0 </span>
                      <Button>+</Button>
                    </div>
                  </td>
                  <td className={styles.priceTag}> $ 5.00</td>
                </tr>
                <tr>
                  <td className='align-middle'>
                    <button onClick={() => console.log('remove item')}>
                      <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
                    </button>
                  </td>
                  <td>
                    <div
                      style={{ width: '40px', height: '40px', background: 'gray' }}
                    ></div>
                  </td>
                  <td>Placeholder Product 3</td>
                  <td className={styles.priceTag}>$ 5.00</td>
                  <td>
                    <div>
                      <Button>-</Button>
                      <span className={styles.quantity}> 0 </span>
                      <Button>+</Button>
                    </div>
                  </td>
                  <td className={styles.priceTag}> $ 5.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.formSummary}>
              <input
                onChange={event => {
                  console.log(event);
                }}
                className={styles.inputs}
                type='text'
                name='firstname'
                placeholder='Your name..'
              />
              <button
                onClick={() => {
                  console.log('Apply Coupon');
                }}
                className={styles.orangeButton}
              >
                Apply Coupon
              </button>
              <button
                onClick={() => {
                  console.log('Update Cart');
                }}
                className={styles.updateCart + ' ' + styles.orangeButton}
              >
                Update Cart
              </button>
            </div>
          </div>
        </div>
        <div className='row justify-content-end'>
          <div className='col-6 '>
            <table className='table table-bordered my-3'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Cart Totals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`border-right ${styles.rowHead}`}>Subtotal</td>
                  <td className={styles.priceTag}>$ 5.00</td>
                </tr>
                <tr>
                  <td className={`border-right ${styles.rowHead}`}>Total</td>
                  <td className={styles.priceTag}>$ 5.00</td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <a href='/'>
                      <button
                        onClick={() => {
                          console.log('Proceed To checkout');
                        }}
                        className={styles.orangeButton + ' ' + styles.proceedButton}
                      >
                        Proceed to Checkout
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyClaim;
