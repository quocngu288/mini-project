import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutAdminAct } from '../../../Store/Action/Admin/AdminAct';
import { fetchCategoryAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
import _ from 'lodash'
import { useHistory, useRouteMatch } from 'react-router';
import { NavLink } from '../../../Components/NavLink/NavLink'
function AsideAdmin() {

    const dispatch = useDispatch()
    const { url } = useRouteMatch()
    const history = useHistory()
    useEffect(() => {
        getLocalStoreAdmin()
    }, [])
    const getLocalStoreAdmin = () => {
        if (!localStorage.getItem('currentAdmin')) {
            return null;
        } else {
            JSON.parse(localStorage.getItem('currentAdmin'))
        }
    }
    const handleLogout = () => {
        const admin_token = JSON.parse(localStorage.getItem('currentAdmin')).access_token

        const config = {
            headers: { Authorization: `Bearer ${admin_token}` }
        };
        logOutAdminAct(config)
        history.push("/adminlogin")

    }

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Managerment</h3>
                {/* <strong>BS</strong> */}
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <NavLink to={`${url}/dashboard`} className="" activeClassName="fw-bold text-dark" inActiveClassName="">
                        <i className="fa fa-home" />
                         DASHBOARD
                         </NavLink>


                </li>
                <li>
                    <NavLink className="" activeClassName="fw-bold text-dark" inActiveClassName="">
                        <i className="fa fa-briefcase" />
            ADMINS
          </NavLink>
                    <NavLink className="" activeClassName="fw-bold text-dark" inActiveClassName="">
                        <i className="fa fa-files-o" />
            USERS
          </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/product`} className="" activeClassName="fw-bold text-dark" inActiveClassName="">
                        <i className="fa fa-link" />
            PRODUCTS
          </NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/category`} className="" activeClassName="fw-bold text-dark" inActiveClassName="">
                        <i className="fa fa-paperclip" />
            CATEGORIES
          </NavLink>
                </li>
                <li style={{ cursor: 'pointer' }}>
                    <a onClick={handleLogout} >
                        <i className="fa fa-paper-plane" />
            LOGOUT
          </a>
                </li>
            </ul>
            <ul className="list-unstyled CTAs">
                <li><a style={{ color: '#47748b' }} href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download </a>
                </li>
                <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
            </ul>
        </nav>
    )
}

export default AsideAdmin
