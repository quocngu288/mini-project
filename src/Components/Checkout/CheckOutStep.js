import React from 'react'

function CheckOutStep(props) {
    return (
        <div className="row checkout-stept common-container">
            <div className={props.step1 ? 'active' : ''}><span className="checkout-stept__number"><span>1</span></span>SHOPPING CART </div>
            <div className={props.step2 ? 'active' : ''}><i class="fas fa-chevron-right"></i><span className="checkout-stept__number"><span>2</span></span>CHECKOUT DETAILS </div>
            <div className={props.step3 ? 'active' : ''}><i class="fas fa-chevron-right"></i><span className="checkout-stept__number"><span>3</span></span>ORDER COMPLETE</div>
        </div>
    )
}

export default CheckOutStep
