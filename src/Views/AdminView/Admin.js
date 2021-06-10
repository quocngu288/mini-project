import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PrivateRouter from '../../Components/PrivateRouter'
import ProductAd from './Modules/ProductAd'
// import LoginAdmin from './LoginAdmin'
import Dashboard from './Modules/Dashboard'
import Account from './Modules/Account'
import './Admin.css'
import AsideAdmin from './Modules/AsideAdmin'
import Notfound from '../../Components/Notfound'
function Admin() {
    const { path } = useRouteMatch()
    return (
        <>
            <div className="wrapper-side">
                <AsideAdmin />
                <Switch>
                    {/* <Route path={`${path}/login`} component={LoginAdmin} /> */}
                    <Route path={`${path}/product`} component={ProductAd} />
                    <Route path={`${path}/account`} component={Account} />
                    <Route path={`${path}/dashboard`} component={Dashboard} />
                    <Route path={`${path}/category`} component={Notfound} />
                </Switch>
            </div>
        </>
    )
}

export default Admin
