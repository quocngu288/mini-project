import React from 'react'
import CheckOutStep from '../../Components/Checkout/CheckOutStep'

function Cart() {
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
                            <tr>
                                <td>xoa</td>
                                <td>
                                    <img src="../../img/7.png" />
                                </td>
                                <td>ten san pham</td>
                                <td>$<span>35.00</span></td>
                                <td>
                                    <div className="btn-quantity">
                                        <button>-</button>
                                        <input value='1' />
                                        <button>+</button>
                                    </div>
                                </td>
                                <td>$<span>23.44</span></td>
                            </tr>
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
                        <p>$<span>12312</span></p>
                    </div>
                    <div className="cart__right__shipping">
                        <p>Shipping</p>
                        <p>Calculate Shipping</p>
                    </div>
                    <div className="cart__right__total">
                        <p>Total</p>
                        <p>$<span>12312</span></p>
                    </div>
                    <button className="btn--orange">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </section>
        </>
    )
}

export default Cart
