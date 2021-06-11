import React, { useEffect, useState } from 'react'
import AsideProduct from '../../Layouts/AsideProduct'
import ProductList from './ProductList/ProductList'
import Shorting from '../../Components/Shorting'
function Product() {
    const [select, setSelect] = useState("0")
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
                        <Shorting setSelect={setSelect} />
                    </div>
                </div>
            </div>

            <section className="product common-container">
                <AsideProduct />
                <ProductList select={select} setSelect={setSelect} />
            </section>
        </>
    )
}

export default Product
