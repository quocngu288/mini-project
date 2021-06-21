import React, { useEffect, useState } from 'react';
import LoadingChild from '../../../../Components/Loading/LoadingChild'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { addToCart, fetchProductDetail } from '../../../../Store/Action/ProductAct';

const Detail = (props) => {
    let { id } = useParams()
    let { url } = useRouteMatch()
    const [count, setCount] = useState(1)
    let dispatch = useDispatch()
    const { loading, product } = useSelector(state => state.productDetailReducer)
    const { cart } = useSelector(state => state.cartReducer)
    useEffect(() => {
        dispatch(fetchProductDetail(id))
    }, [])
    const handleAddToCart = (item) => {
        let cart = {
            id: item.id,
            image: item.productImages,
            quantities: item.quantities,
            name: item.name,
            price: item.price,
            description: item.description,
            count: count
        }
        dispatch(addToCart(cart))
    }
    const handleClickMinisButton = (count) => {
        if (count > 1) {
            setCount(count - 1)
        } else {
            setCount(1)
        }
    }
    const handleClickPlusButton = (count, qty) => {
        console.log("qty", qty);
        if (count < qty) {
            setCount(count + 1)
        }
        else {
            setCount(qty)
        }
    }
    return (
        <div className="product-detail common-container">
            {loading ? <div className="loading"><LoadingChild /></div> : !product ? "" : (
                <>
                    <div className="product-detail__left">
                        <div className="product-detail__left__image">
                            <img src={product.productImages[0].image} alt="" />
                            <img src={product.productImages[1].image} alt="" />
                        </div>

                        <div className="wrap-image">
                            <img src={product.productImages[0].image} alt="" />
                            <img src={product.productImages[1].image} alt="" />
                        </div>
                    </div>
                    <div className="product-detail__midle">
                        <ul>
                            <li><a>HOME</a></li>
                            <li><a>SHOP</a></li>
                            <li><a>CLOTHING</a></li>
                            <li><a>HOODIES</a></li>
                        </ul>
                        <h2>{product.name}</h2>
                        <p>$<span>{product.price}</span></p>
                        <p>
                            {product.description}
                        </p>
                        <div className="wrap-quantity">
                            <div className="btn-quantity">
                                <button onClick={() => handleClickMinisButton(count)}>-</button>
                                <input value={count} />
                                <button onClick={() => handleClickPlusButton(count, product.quantities)}>+</button>
                            </div>

                            <button className="btn--blue" onClick={() => { handleAddToCart(product) }}>ADD TO CART</button>

                        </div>
                        {cart.length > 0 ? <Link to={`/user/cart`} className="btn--orange">GO TO CART</Link> : ''}


                    </div>
                    <div className="product-detail__right">

                    </div>
                </>
            )}
        </div>
    )
}

export default Detail;
