import React from 'react';
import styles from './Blog.module.scss';
import post_1 from './images-blog/post1.jpeg';
import post_2 from './images-blog/post2.jpeg';
import post_3 from './images-blog/post3.jpeg';
import post_4 from './images-blog/post4.jpeg';
import post_5 from './images-blog/post5.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolder, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@material-ui/core';

const Blog = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='col-12'>
        <h2>Archives</h2>
      </div>
      <div className='row'>
        <div className={`col-10 col-sm-9 ${styles.article}`}>
          <div className={styles.post}>
            <h3>
              Post 1 <span>Witamy na nowej stronie sklepu</span>
            </h3>
            <img src={post_1} alt='img1' />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
                suscipit est, a vulputate est. Mauris condimentum, velit rutrum
                condimentum mollis, est augue commodo magna, at egestas orci magna
                viverra ligula. Nam hendrerit quam ut tellus ullamcorper, interdum
                rutrum nulla feugiat. Maecenas sit amet maximus velit. Aenean lobortis
                mauris felis, sed iaculis risus aliquet nec. Duis eget vulputate felis,
                ut elementum risus.
              </p>
            </div>
            <div className={`d-flex justify-content-start  ${styles.postFooter}`}>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>admin</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  <span>June 15, 16</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                  <span>Just usual</span>
                </button>
              </Link>
              <Link>
                <button>
                  <span>Read more...</span>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.post}>
            <h3>
              {' '}
              Post 2<span>Styl dla Twojego domu</span>
            </h3>
            <img src={post_2} alt='img2' />
            <div>
              <p>
                Integer et sollicitudin augue. Fusce ut felis quis nunc pellentesque
                auctor. Nam scelerisque nec diam et molestie. Cras eu odio sit amet
                justo ultricies porta ut id libero. Nunc et auctor tellus, ut porttitor
                nisi. Donec eu felis in leo sodales feugiat rutrum at dui. Donec ut
                tristique velit. Praesent a fermentum quam. Cras vitae quam quis augue
                efficitur feugiat in sed risus. Morbi mollis cursus pulvinar. In lacinia
                dictum ante eu bibendum.
              </p>
            </div>
            <div className={`d-flex justify-content-start  ${styles.postFooter}`}>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>admin</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  <span>June 15, 16</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                  <span>Just usual</span>
                </button>
              </Link>
              <Link>
                <button>
                  <span>Read more...</span>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.post}>
            <h3>
              Post 3<span>Przedpokój - wizytówka domu</span>
            </h3>
            <img src={post_3} alt='img3' />
            <div>
              <p>
                Fusce tempor lobortis urna, sed facilisis odio. Suspendisse convallis
                massa quis odio placerat, sit amet ultrices justo mollis. Nam interdum
                massa a mauris auctor, at convallis tortor ultricies. Morbi nunc nunc,
                finibus sit amet purus sit amet, pellentesque pellentesque urna. Etiam
                porta lectus urna, eu ullamcorper tortor interdum sed. Aenean magna
                diam, suscipit non lectus iaculis, placerat dictum dolor. Curabitur
                auctor in est eu accumsan.
              </p>
            </div>
            <div className={`d-flex justify-content-start  ${styles.postFooter}`}>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>admin</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  <span>June 15, 16</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                  <span>Just usual</span>
                </button>
              </Link>
              <Link>
                <button>
                  <span>Read more...</span>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.post}>
            <h3>
              Post 4<span>Loft - jak udekorować?</span>
            </h3>
            <img src={post_4} alt='img4' />
            <div>
              <p>
                Praesent sed elit auctor, pharetra sem eu, hendrerit mauris.
                Pellentesque sed pretium dui, id tristique urna. Sed id malesuada diam.
                Aenean dictum justo nec orci ultrices hendrerit. Nulla ullamcorper
                tellus augue. Sed iaculis elit enim, at sagittis lacus faucibus non.
                Integer lacinia imperdiet odio quis lobortis. Sed ornare, nunc nec
                laoreet ornare, mi nunc tristique ipsum, vel eleifend purus purus non
                magna. Sed porta sit amet massa euismod condimentum
              </p>
            </div>
            <div className={`d-flex justify-content-start  ${styles.postFooter}`}>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>admin</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  <span>June 15, 16</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                  <span>Just usual</span>
                </button>
              </Link>
              <Link>
                <button>
                  <span>Read more...</span>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.post}>
            <h3>
              Post 5<span>Przestronne wnętrze, a mały metraż</span>
            </h3>
            <img src={post_5} alt='img5' />
            <div>
              <p>
                Vestibulum sed scelerisque elit. Donec non blandit ante. Vivamus
                tristique turpis in ligula fringilla molestie. Donec quis diam at sem
                molestie commodo cursus sit amet lacus. Etiam pretium velit orci, ut
                tristique elit euismod sed. Maecenas iaculis suscipit orci, non
                pellentesque nisl eleifend ut. Nunc vitae mauris vel quam pulvinar
                pellentesque vel non nisi. Ut sed ipsum elit. Interdum et malesuada
                fames ac ante ipsum primis in faucibus.
              </p>
            </div>
            <div className={`d-flex justify-content-start  ${styles.postFooter}`}>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />
                  <span>admin</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                  <span>June 15, 16</span>
                </button>
              </Link>
              <Link>
                <button>
                  <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                  <span>Just usual</span>
                </button>
              </Link>
              <Link>
                <button>
                  <span>Read more...</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={`col-2 col-sm-3 ${styles.menuBlog}`}>
          <div className={styles.search}>
            <div>
              <input type='text' placeholder='Search...' />
            </div>
          </div>
          <div className={styles.recentPosts}>
            <h3>Recent Posts</h3>
            <ul>
              <Link>
                <li>Post 5</li>
              </Link>
              <Link>
                <li>Post 3</li>
              </Link>
              <Link>
                <li>Post 2</li>
              </Link>
              <Link>
                <li>Post 1</li>
              </Link>
            </ul>
          </div>
          <div className={styles.comments}>
            <h3>Recent Comments</h3>
          </div>
          <div className={styles.archives}>
            <h3>Archives</h3>
            <ul>
              <li>
                <Link>
                  <button className={`d-flex justify-content-start `}>
                    <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                    <span>June 2015</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.categories}>
            <h3>Categories</h3>
            <ul>
              <li>
                <Link>
                  <button className={`d-flex justify-content-start `}>
                    <FontAwesomeIcon className={styles.icon} icon={faFolder} />
                    <span>Just usual</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.meta}>
            <h3>Meta</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
