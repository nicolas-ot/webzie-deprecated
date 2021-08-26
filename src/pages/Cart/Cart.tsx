import styles from './cart.module.scss';
import webinars from '../../data/static/webinar_mock.js';

import Layout from '../../hoc/Layout/Layout';
import Summary from '../Cart/Summary/Summary';
import Webinar from './Webinar/Webinar';

const Cart = () => {
  const webinarList = webinars.map((webinar) => (
    <Webinar
      poster={webinar.poster}
      host={webinar.host}
      price={webinar.price}
      title={webinar.title}
    />
  ));

  return (
    <Layout>
      <div>
        <div className={styles.container}>
          <div className={styles.cart_box}>
            <div className={styles.cart_topic}>
              <h1>Your Cart</h1>
            </div>
            <div className={styles.box_cart}>
              <div className={styles.cart_left}>
                <div className={styles.left_top}>
                  <div className={styles.checkbox}>
                    <input type='checkbox' value='checkall' />
                    <p>Check All</p>
                  </div>
                  <div className={styles.image}>
                    <img
                      src={
                        require('../../assets/images/icon_svg/delete_black_48dp.svg')
                          .default
                      }
                      alt='trash'
                    />
                  </div>
                </div>
                <div className={styles.cart_list}>{webinarList}</div>
              </div>
              <div className={styles.cart_right}>
                <Summary />
                {/* <div className={styles.box_price_information}>
                    <h1>Summary</h1>
                    <div className={styles.total}>
                      <p>Subtotal</p>
                      <div className={styles.nominal}>
                          <p>Rp</p>
                          <p>1.000.000,-</p>
                      </div>
                    </div>
                    <div className={styles.total}>
                      <p>Service Fee</p>
                      <div className={styles.nominal}>
                          <p>Rp</p>
                          <p>25.000,-</p>
                      </div>
                    </div>
                    <div className={styles.discount}>
                      <p><i>Discount</i></p>
                      <div className={styles.nominal_discount}>
                          <p><i>Rp</i></p>
                          <p><i>0,-</i></p>
                      </div>
                    </div>
                    <div className={styles.code}>
                        <p><b>First Name</b></p>
                        <input type="text" placeholder="Enter voucher code" />
                        <div className={styles.box_button}>
                          <button>Apply</button>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.total}>
                      <p>Total</p>
                      <div className={styles.nominal}>
                          <p>Rp</p>
                          <p><b>1.025.000,-</b></p>
                      </div>
                    </div>
                    <div className={styles.button_checkout}>
                      <button>Check Out</button>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;