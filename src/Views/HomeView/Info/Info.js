import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Switch, Route, NavLink, useRouteMatch, Link } from 'react-router-dom'
import { fetchProfileUser } from '../../../Store/Action/AccountAct';
import ShowInfo from './Layout/ShowInfo';
import UpdateAddress from './Layout/UpdateAddress';
function Info() {
    const { path, url } = useRouteMatch()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileUser())
    }, [])
    return (
        <>
            <div className="info__navbars">
                <div className="info__navbars__wrap common-container">
                    <h2>MY ACCOUNT</h2>
                    <p>ACCOUNT DETAIL</p>
                </div>
            </div>
            <section className="info common-container">

                <div className="info__left">
                    <div className="info__left__head">
                        <img src="../../img/avatar.png" /><p>quocngu <span>#10726</span></p>
                    </div>
                    <div className="info__left__content">
                        <ul>
                            <li><Link>DASHBOARD</Link></li>
                            <li><Link>ORDERS</Link></li>
                            <li>
                                <Link>DOWNLOADS</Link>
                            </li>
                            <li>
                                <Link to={`${url}/editaddress`} activeClassName="active">ADDRESSES</Link>
                            </li>
                            <li><Link to={`${url}/detail`}>ACCOUNT DETAILS</Link></li>
                            <li><Link>WISHLIST</Link></li>
                            <li><a>LOGOUT</a></li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route path={`${path}/detail`} component={ShowInfo} />
                    <Route path={`${path}/editaddress`} component={UpdateAddress} />
                </Switch>


            </section>
        </>
    )
}

export default Info
