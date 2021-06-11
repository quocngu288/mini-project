import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem({ item }) {
    return (
        <Link to={item.quantities === 0 ? "" : `/product/${item.id}`} className="item">
            <div className="item__wrap-img">
                <img src={`${item.productImages[0].image}`} alt="" />
                <a className="item__view">QUICK VIEWS</a>
            </div>
            <h2>{item.name}</h2>
            <p className="item__name">{item.description.length > 70 ? item.description.substring(1, 70).concat('...') : item.description}</p>
            <p className="item__price">$<span>{item.price}</span></p>
            <p className="item__sale">Sale!</p>
            {item.quantities === 0 ? (<p className="item__out-stock">OUT OF STOCK</p>) : null}

        </Link>
    )
}

export default ProductItem
