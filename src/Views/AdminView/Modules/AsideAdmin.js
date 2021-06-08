import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutAdminAct } from '../../../Store/Action/Admin/AdminAct';
import { fetchCategoryAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
import _ from 'lodash'
function AsideAdmin() {

    const dispatch = useDispatch()
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
    }

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Managerment</h3>
                {/* <strong>BS</strong> */}
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu">
                        <i className="fa fa-home" />
            DASHBOARD
          </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-briefcase" />
            ADMINS
          </a>
                    <a href="#pageSubmenu">
                        <i className="fa fa-files-o" />
            USERS
          </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-link" />
            PRODUCTS
          </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-paperclip" />
            CATEGORIES
          </a>
                </li>
                <li>
                    <a onClick={handleLogout}>
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
