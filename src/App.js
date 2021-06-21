// import LoadingChild from './Components/Loading/LoadingChild';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Views/AdminView/Admin';
import Login from './Views/AdminView/LoginAdmin'
import User from './Views/HomeView/User'
import Notfound from './Components/Notfound';


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={Notfound} />
      </Switch>
    </Router>

  );
}

export default App;
