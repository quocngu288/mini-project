import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import { fetchProfileUser } from '../../../Store/Action/AccountAct';
import { logout } from '../../../Store/Action/UserAct';
import { NavLink } from '../../../Components/NavLink/NavLink'
import ShowInfo from './Layout/ShowInfo';
import UpdateAddress from './Layout/UpdateAddress';
import Notfound from '../../../Components/Notfound'
function Info() {
    const { path, url } = useRouteMatch()
    const history = useHistory()
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.logoutReducer)
    var currentUser = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser")).user :
        null;
    useEffect(() => {
        var access_token = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser")).access_token :
            null;
        const config = {
            headers: { Authorization: `Bearer ${access_token}` }
        };
        if (access_token !== null) {
            dispatch(fetchProfileUser(config))
        }

    }, [dispatch])
    const handleLogout = () => {
        dispatch(logout());
        if (loading === false) {
            history.push('/user/product')
        }
    }
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
                            <li><NavLink to={`${url}/dashboard`} className="" activeClassName="fw-bold text-primary" inActiveClassName="">DASHBOARD</NavLink></li>
                            <li><NavLink to={`${url}/order`} className="" activeClassName="fw-bold text-primary" inActiveClassName="">ORDERS</NavLink></li>
                            <li>
                                <NavLink to={`${url}/download`} className="" activeClassName="fw-bold text-primary" inActiveClassName="">DOWNLOADS</NavLink>
                            </li>
                            <li>
                                <NavLink className="" to={`${url}/editaddress`} activeClassName="fw-bold text-primary" inActiveClassName="">
                                    ADDRESSES
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="" to={`${url}/detail`} activeClassName="fw-bold text-primary" inActiveClassName="">
                                    ACCOUNT DETAILS
                                </NavLink>
                            </li>
                            <li><NavLink className="" activeClassName="fw-bold text-primary" inActiveClassName="">WISHLIST</NavLink></li>
                            <li><a onClick={handleLogout}>LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route path={`${path}/detail`} component={ShowInfo} />
                    <Route path={`${path}/editaddress`} component={UpdateAddress} />
                    <Route path={`${path}/dashboard`} component={Notfound} />
                    <Route path={`${path}/download`} component={Notfound} />
                    <Route path={`${path}/order`} component={Notfound} />
                </Switch>
            </section>
        </>
    )
}

export default Info
