import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import LoadingChild from '../../../Components/Loading/LoadingChild';
import { addToCart, fetchProductDetail } from '../../../Store/Action/ProductAct';

function ProductDetail(props) {
    let { id } = useParams()
    let dispatch = useDispatch()
    const { loading, product } = useSelector(state => state.productDetailReducer)
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';

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
            count: 1
        }
        dispatch(addToCart(cart))

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
                                <button>-</button>
                                <input value='1' />
                                <button>+</button>
                            </div>

                            <button className="btn--blue" onClick={() => { handleAddToCart(product) }}>ADD TO CART</button>

                        </div>
                        {cartStore.length > 0 ? <Link to={'/cart'} className="btn--orange">GO TO CART</Link> : ''}


                    </div>

                </>
            )}
        </div>
    )
}

export default ProductDetail
