import React from 'react'
import { useHistory } from 'react-router'
import CheckOutStep from '../../../Components/Checkout/CheckOutStep'

function Order() {
    // const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';
    // const userStore = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null
    const history = useHistory()
    const handleClickOrder = () => {
        history.push('/')
    }
    return (
        <>
            <CheckOutStep step1 step2 step3 />
            <section className="order">
                <div className="order__left">
                    <h1>THANK YOU YOUR PURCHASE</h1>
                    <p>Your Order Number is : 093734838</p>
                    <p>We'll email you an order compfirmation with detais and Tracking info.</p>
                    <button className="btn--orange" onClick={handleClickOrder}>CONTINUTE SHOPPING</button>
                    <h2>PRODUCT YOU MAY LIKE</h2>
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

            </section>
        </>
    )
}

export default Order
