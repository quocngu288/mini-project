// import LoadingChild from './Components/Loading/LoadingChild';
import React from 'react'
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import './scss/main.scss';
import { routes } from './Routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  // function RouteWithSubRoute(route) {
  //   return (
  //     <Route path={route.path} exact={route.exact}>
  //       <route.component routes={route.routes} />
  //     </Route>
  //   )
  // }
  const showRouter = routers => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map(router => {
        return <Route path={router.path} exact={router.exact} component={router.main} />
      })

    }
    return <Switch>{result}</Switch>
  }
  return (
    <>
      <Router>
        <Header />
        {/* <LoadingChild /> */}
        <main>
          {/* <RouteWithSubRoute {...route} key={route.path} /> */}
          {showRouter(routes)}
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
