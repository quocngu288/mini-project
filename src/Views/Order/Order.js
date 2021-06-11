import React from 'react'
import CheckOutStep from '../../Components/Checkout/CheckOutStep'

function Order() {
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';
    const userStore = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null

    const itemsArr = cartStore.map(item => {
        const object = {
            id: item.id,
            price: item.count * item.price,
            count: item.count
        }
        return object
    })
    const totalItems = cartStore.reduce((a, b) => a + b.price * b.count, 0)
    const handleClickOrder = () => {
        const order = {
            address: userStore.address,
            phone: userStore.phone,
            items: itemsArr,
            total: totalItems
        }
        console.log(order);
    }
    return (
        <>
            <CheckOutStep step1 step2 step3 />
            <section className="order">
                <div className="order__left">

                </div>
                <div className="order__right">
                    <button className="btn--orange" onClick={handleClickOrder}>ORDER COMPLETE</button>
                </div>
            </section>
        </>
    )
}

export default Order
