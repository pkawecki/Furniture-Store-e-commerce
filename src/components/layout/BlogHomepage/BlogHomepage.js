import React from 'react';

import styles from './BlogHomepage.module.scss';

const BlogHomepage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.panelBar}>
        <div className={'row no-gutters align-items-end'}>
          <div className={'col-11 ' + styles.heading}>
            <h3>LATEST BLOG</h3>
          </div>
          <div className={'col-auto ' + styles.dots}>
            <ul>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <div className={styles.blogArticle}>123</div>
        </div>
        <div className='col-4'>
          <div className={styles.blogArticle}>123</div>
        </div>
        <div className='col-4'>
          <div className={styles.blogArticle}>123</div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogHomepage;
