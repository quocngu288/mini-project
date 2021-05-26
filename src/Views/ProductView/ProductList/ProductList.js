import React from 'react'
import { useSelector } from 'react-redux'
import LoadingChild from '../../../Components/Loading/LoadingChild';
import ProductItem from './ProductItem';

export default function ProductList(props) {
    const { loading, cateProduct, errors } = useSelector(state => state.CateProductReducer)
    console.log(loading, cateProduct, errors);
    return (
        <section className="product-list">
            {loading ? <div className="loading"><LoadingChild /></div> : (
                <div className="product__items">
                    {
                        cateProduct.map(item => {
                            return (
                                <ProductItem item={item} key={item.id} />
                            )
                        })
                    }
                </div>
            )}


        </section>
    )
}
