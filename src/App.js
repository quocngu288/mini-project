// import LoadingChild from './Components/Loading/LoadingChild';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import ProductDetail from './Views/ProductView/ProductDetail/ProductDetail';
import Product from './Views/ProductView/Product';
import Info from './Views/HomeView/Info/Info';
import Cart from './Views/CartView/Cart';
import CheckoutDetail from './Views/Checkout/CheckoutDetail';
import Order from './Views/Order/Order';
import Admin from './Views/AdminView/Admin';
import LoginAdmin from './Views/AdminView/LoginAdmin';
import Notfound from './Components/Notfound';
import PrivateUser from './Components/PrivateRouter/PrivateUser'
import PrivateAdmin from './Components/PrivateRouter/PrivateAdmin';
function App() {
  return (

    <Router>
      <Header />
      {/* <LoadingChild /> */}
      <main>
        <Switch>
          <Route path="/" component={Product} exact />
          <Route path="/account" component={Info} />
          <Route path="/product/:id" component={ProductDetail} />
          <PrivateUser path="/cart" component={Cart} />
          <PrivateUser path="/checkout" component={CheckoutDetail} />
          <PrivateUser path="/order" component={Order} />
          <Route path="/adminlogin" component={LoginAdmin} />
          <PrivateAdmin path="/admin" component={Admin} />

          <Route path="/*" component={Notfound} />
        </Switch>
      </main>
      <Footer />

    </Router>

  );
}

export default App;
