import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckOutStep from '../../../Components/Checkout/CheckOutStep'
import _ from 'lodash'
import LoadingChild from '../../../Components/Loading/LoadingChild';
import { decreaseCartItem, deleteCartItem, increaseCartItem } from '../../../Store/Action/ProductAct';
import { useRouteMatch } from 'react-router-dom'
function Cart() {
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
    const { cart } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const { url } = useRouteMatch()
    console.log(url);
    useEffect(() => {
        console.log("render");

    }, [dispatch, cart])
    const handleIncreateCart = (id) => {
        dispatch(increaseCartItem(id))
    }
    const handleDecreateCart = (id) => {
        dispatch(decreaseCartItem(id))
    }
    const handleClickDeleteItemCart = (id) => {
        console.log("lic");
        dispatch(deleteCartItem(id))
    }
    return (
        <>
            <CheckOutStep step1></CheckOutStep>

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
                            {_.isEmpty(cart) && cartStore === null ? <div><LoadingChild /></div> : (
                                cartStore.map((item, i) => {
                                    return (
                                        <tr>
                                            <td><button className="close" onClick={() => handleClickDeleteItemCart(item.id)}><i class="fas fa-times"></i></button></td>
                                            <td>
                                                <img src={item.image[0].image} />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>$<span>{item.price}</span></td>
                                            <td>
                                                <div className="btn-quantity">
                                                    <button onClick={() => handleDecreateCart(item.id)}>-</button>
                                                    <input value={item.count} />
                                                    <button onClick={() => handleIncreateCart(item.id)}>+</button>
                                                </div>
                                            </td>
                                            <td>$<span>{item.count * item.price}</span></td>
                                        </tr>
                                    )
                                })
                            )}


                        </tbody>
                    </table>
                    <div className="wrap__btn">
                        <Link to={'/'} className="btn--blue">CONTINUTE SHOPPING</Link>
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
                        <p>$<span>{cartStore !== null ? cartStore.reduce((a, b) => a + b.count * b.price, 0) : ""}</span></p>
                    </div>
                    <div className="cart__right__shipping">
                        <p>Shipping</p>
                        <p>Calculate Shipping</p>
                    </div>
                    <div className="cart__right__total">
                        <p>Total</p>
                        <p>$<span>{cartStore !== null ? cartStore.reduce((a, b) => a + b.count * b.price, 0) : ""}</span></p>
                    </div>
                    <Link to={`/user/checkout`} className="btn--orange">
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </section>


        </>
    )
}

export default Cart
