import React from 'react';
import { useState } from 'react';
import Aside from './Modules/Aside'
import List from './Modules/List'
import Shorting from '../../../Components/Shorting'
const Product = () => {
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
                <Aside />
                <List select={select} setSelect={setSelect} />
            </section>
        </>
    );
}

export default Product;
