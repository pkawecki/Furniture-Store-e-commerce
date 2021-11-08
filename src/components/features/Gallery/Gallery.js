import React from 'react';
import styles from './Gallery.module.scss';

class Gallery extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>

              {/* Gallery tabs */}
              <div className={styles.menu}>
                <ul>
                  <li>
                    <span>Featured</span>
                  </li>
                  <li>
                    <span className={styles.active}>Top seller</span>
                  </li>
                  <li>
                    <span>Sale off</span>
                  </li>
                  <li>
                    <span>Top rated</span>
                  </li>
                </ul>
              </div>

              {/*Left side of the gallery*/}

              {/*Rating*/}

              {/*Slider*/}

              {/*Right side of the gallery*/}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;