import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import ProductAd from './Modules/ProductAd'
import Dashboard from './Modules/Dashboard'
import Account from './Modules/Account'
import './Admin.css'
import AsideAdmin from './Modules/AsideAdmin'
import Notfound from '../../Components/Notfound'

import PrivateAdmin from '../../Components/PrivateRouter/PrivateAdmin'
function Admin() {
    const { path } = useRouteMatch()
    return (
        <>
            <div className="wrapper-side">
                <AsideAdmin />
                <Switch>
                    <PrivateAdmin path={`${path}/product`} component={ProductAd} />
                    <PrivateAdmin path={`${path}/account`} component={Account} />
                    <PrivateAdmin path={`${path}/dashboard`} component={Dashboard} />
                    <PrivateAdmin path={`${path}/user`} component={Notfound} />
                    <PrivateAdmin path={`${path}/category`} component={Notfound} />
                </Switch>
            </div>
        </>
    )
}

export default Admin
