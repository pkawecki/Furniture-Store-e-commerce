import {
  faMobileAlt,
  faShoppingBasket,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Cart.module.scss';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  // margin: 0 1em;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  font-family: monospace;
`;

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
        </div>
      </div>
    </div>
    <div className={styles.containerWrapper}>
      <div className='container' align='center'>
        <div className='col-10 '>
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
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
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
                    <Button>-</Button>
                    <span className={styles.quantity}> 0 </span>
                    <Button>+</Button>
                  </div>
                </td>
                <td className={styles.priceTag}> $ 5.00</td>
              </tr>
              <tr>
                <td className='align-middle'>
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
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
                  <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
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
        </div>
      </div>
    </div>
  </div>
);

export default CompanyClaim;
