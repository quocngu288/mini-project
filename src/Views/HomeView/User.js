import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom'
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';
import Product from './Product/Product'
import Detail from './Product/Modules/Detail'
import Info from './Info/Info'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import Order from './Order/Order'
import PrivateUser from '../../Components/PrivateRouter/PrivateUser'
const User = () => {
    const { path } = useRouteMatch()
    console.log(path);
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path={`${path}/product`} component={Product} exact />
                    <Route path={`${path}/product:id`} component={Detail} />
                    <PrivateUser path={`${path}/account`} component={Info} />
                    <PrivateUser path={`${path}/cart`} component={Cart} />
                    <PrivateUser path={`${path}/checkout`} component={Checkout} />
                    <PrivateUser path={`${path}/order`} component={Order} />
                </Switch>
            </main>

            <Footer />
        </>
    );
}

export default User;
