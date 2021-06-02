import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckOutStep from '../../Components/Checkout/CheckOutStep'
import _ from 'lodash'
import LoadingChild from '../../Components/Loading/LoadingChild';
function Cart() {
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';
    const user = useSelector(state => state.loginReducer)

    // console.log(cartStore);
    console.log("cart", cartStore);
    console.log("user", user);

    return (
        <>
            <CheckOutStep step1></CheckOutStep>
            {_.isEmpty(cartStore) ? <div><LoadingChild /></div> : (
                <section className="cart">
                    <div className="cart__left">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartStore.map((item, i) => {
                                    return (
                                        <tr>
                                            <td>xoa</td>
                                            <td>
                                                <img src={item.image[0].image} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>$<span>{item.price}</span></td>
                                            <td>
                                                <div className="btn-quantity">
                                                    <button>-</button>
                                                    <input value={item.count} />
                                                    <button>+</button>
                                                </div>
                                            </td>
                                            <td>$<span>{item.count * item.price}</span></td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        <div className="wrap__btn">
                            <a className="btn--blue">CONTINUTE SHOPPING</a>
                            <a className="btn--blue">UPDATE CART</a>
                        </div>
                        <h3>You may interested in...</h3>
                        <div className="product__items">
                            <div className="item">
                                <div className="item__wrap-img">
                                    <img src="../../img/7.png" alt="" />
                                    <a className="item__view">QUICK VIEWS</a>
                                </div>
                                <h2>CLOTHES</h2>
                                <p className="item__name">Happy Ninja</p>
                                <p className="item__price">$<span>35,00</span></p>
                            </div>
                            <div className="item">
                                <div className="item__wrap-img">
                                    <img src="../../img/8.png" alt="" />
                                    <a className="item__view">QUICK VIEWS</a>
                                </div>
                                <h2>CLOTHES</h2>
                                <p className="item__name">Happy Ninja</p>
                                <p className="item__price">$<span>35,00</span></p>
                            </div>

                        </div>
                    </div>
                    <div className="cart__right">
                        <h3>CART TOTALS</h3>
                        <div className="cart__right__sub-total">
                            <p>Subtotal</p>
                            <p>$<span>{cartStore.reduce((a, b) => a + b.count * b.price, 0)}</span></p>
                        </div>
                        <div className="cart__right__shipping">
                            <p>Shipping</p>
                            <p>Calculate Shipping</p>
                        </div>
                        <div className="cart__right__total">
                            <p>Total</p>
                            <p>$<span>{cartStore.reduce((a, b) => a + b.count * b.price, 0)}</span></p>
                        </div>
                        <Link to={'/checkout'} className="btn--orange">
                            PROCEED TO CHECKOUT
                        </Link>
                    </div>
                </section>
            )}

        </>
    )
}

export default Cart
