import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PrivateRouter from '../../Components/PrivateRouter'
import ProductAd from './Modules/ProductAd'
import LoginAdmin from './LoginAdmin'
import Dashboard from './Modules/Dashboard'
import './Admin.css'
import AsideAdmin from './Modules/AsideAdmin'
function Admin() {
    const { url, path } = useRouteMatch()
    return (
        <>
            <div className="wrapper">
                <AsideAdmin />
                <Switch>
                    {/* <Route path={`${path}/login`} component={LoginAdmin} /> */}
                    <Route path={`${path}/product`} component={ProductAd} />
                    <Route path={`${path}/dashboard`} component={Dashboard} />
                </Switch>
            </div>
        </>
    )
}

export default Admin
