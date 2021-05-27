// import LoadingChild from './Components/Loading/LoadingChild';
import React from 'react'
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import ProductDetail from './Views/ProductView/ProductDetail/ProductDetail';
import Product from './Views/ProductView'
import Info from './Views/HomeView/Info/Info';
import Cart from './Views/CartView/Cart';
function App() {

  // function RouteWithSubRoute(route) {
  //   return (
  //     <Route path={route.path} exact={route.exact}>
  //       <route.component routes={route.routes} />
  //     </Route>
  //   )
  // }
  // const showRouter = routers => {
  //   let result = null;
  //   if (routers.length > 0) {
  //     result = routers.map(router => {
  //       return <Route path={router.path} exact={router.exact} component={router.main} />
  //     })

  //   }
  //   return <Switch>{result}</Switch>
  // }
  return (

    <Router>
      <Header />
      {/* <LoadingChild /> */}
      <main>
        {/* <RouteWithSubRoute {...route} key={route.path} /> */}
        <Switch>
          <Route path="/" component={Product} exact />
          <Route path="/account" component={Info} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/id" component={ProductDetail} />
        </Switch>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
