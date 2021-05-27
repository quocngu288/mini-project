import React, { useEffect } from 'react'
import AsideProduct from '../../Layouts/AsideProduct'
import ProductList from './ProductList/ProductList'

function index() {
    return (
        <>
            <div className="navbars">
                <div className="navbars__wrap common-container">
                    <div className="navbar__left">
                        <ul>
                            <li><a>HOME</a></li>
                            <li><a className="active">SHOP</a></li>
                            
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <p>shoping all 6 result</p>
                        <select>
                            <option>Default Shorting</option>
                            <option>123</option>
                            <option>123</option>
                        </select>
                    </div>
                </div>
            </div>

            <section className="product common-container">
                <AsideProduct />
                <ProductList />
            </section>
        </>
    )
}

export default index
