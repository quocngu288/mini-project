import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../Store/Action/UserAct';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import LoadingBottom from '../Components/Loading/LoadingBottom'
import _ from 'lodash'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { validateLogin, validateRegister } from '../Services/Validate'

export default function Header() {
    const [isShowLogin, setIsShowLogin] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const { path, url } = useRouteMatch()
    // const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
    const { cart } = useSelector(state => state.cartReducer)
    const user = useSelector(state => state.loginReducer)
    let userLogin = user.userLogin
    let loadingLogin = user.loading
    const { loading, accountAdmin } = useSelector(state => state.loginAdminReducer)
    const adminStore = localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin')).admin : null;
    useEffect(() => {
        getLocalStoreUser()
    }, [dispatch, user, cart, accountAdmin, history])

    const getLocalStoreAdmin = () => {
        if (!localStorage.getItem('currentAdmin')) {
            return null;
        } else {
            JSON.parse(localStorage.getItem('currentAdmin'))
        }
    }
    const getLocalStoreUser = () => {
        if (!localStorage.getItem('currentUser')) {
            return null;
        } else {
            JSON.parse(localStorage.getItem('currentUser'))
        }
    }
    const handleClickLogin = () => {
        setIsShowLogin(!isShowLogin)
    }
    const checkShowAccount = (userLog) => {
        const userCurrent = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null
        console.log('curren', userCurrent);
        if (_.isEmpty(userLog) && userCurrent === null) {
            return (
                <a onClick={handleClickLogin}>LOGIN</a>
            )
        }
        else {
            return (
                <Link to={`${url}/account`}>ACCOUNT</Link>
            )
        }
    }
    const checkShowCart = (cart) => {
        const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

        if (_.isEmpty(cart) && cartStore === null) {
            return (
                <>
                    <Link to={'/user/cart'} className="price">CART / $<span>0.0</span></Link>
                    <strong className="cart">0</strong>
                </>
            )
        }
        else {
            return (
                <>
                    <Link to={'/cart'} className="price">CART / $<span>{cartStore.reduce((a, b) => a + b.price * b.count, 0)}</span></Link>
                    <strong className="cart">{cartStore.length}</strong>
                </>
            )
        }
    }
    return (
        <>
            <header>
                <div className="nav__left">
                    <img src="../../img/LOGO.jpg" alt="" />
                    <h4><Link to={'/'}>FLATSOME</Link></h4>
                </div>
                <div className="nav__right">

                    {adminStore !== null || !_.isEmpty(accountAdmin) ? "" : checkShowAccount(userLogin)}
                    {adminStore !== null || !_.isEmpty(accountAdmin) ? "" : checkShowCart(cart)}
                    {/* <Link to={'/cart'} className="price">CART / $<span>0.0</span></Link>
                    <strong className="cart">{cartStore ? cartStore.length : 0}</strong> */}
                </div>
            </header>
            <div id="myModalLogin" className="modalLogin" style={isShowLogin ? { display: 'block' } : { display: 'none' }}>
                <span className="close" onClick={handleClickLogin}>×</span>
                <div className="modalLogin_content">
                    <div className="content__left">
                        <h2>LOGIN</h2>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            validationSchema={validateLogin}
                            onSubmit={(data, { setSubmitting, setErrors, resetForm }) => {
                                dispatch(login(data.username, data.password))
                                resetForm({});
                                setTimeout(() => {
                                    setIsShowLogin(false)
                                }, 3000)

                            }}
                            render={propsFormik => (
                                <Form className="form__left" onSubmit={propsFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Username</label>
                                        <Field onChange={(e) => propsFormik.handleChange(e)}
                                            value={propsFormik.values.username}
                                            onBlur={propsFormik.handleBlur}
                                            name="username" type="email" className="form-control" placeholder="Email Address" />
                                        {propsFormik.errors.username && propsFormik.touched.username ? (
                                            <div className="text-danger" >{propsFormik.errors.username}</div>
                                        ) : null}

                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Password</label>
                                        <Field onChange={(e) => propsFormik.handleChange(e)}
                                            value={propsFormik.values.password}
                                            onBlur={propsFormik.handleBlur}
                                            name="password" type="password" className="form-control" placeholder="Password" />
                                        {propsFormik.errors.password && propsFormik.touched.password ? (
                                            <div className="text-danger" >{propsFormik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" /> <label>Remember Me</label>
                                    </div>
                                    <button className="btn--blue" type="Submit">{loadingLogin ? <LoadingBottom /> : 'LOGIN'}</button>
                                </Form>
                            )}
                        >

                        </Formik>

                    </div>
                    <div className="content__right">
                        <h2>REGISTER</h2>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={validateRegister}
                            onSubmit={data => {
                                dispatch(register(data.email, data.password))
                                setIsShowLogin(false)
                            }}
                            render={propsFormik => (
                                <Form className="form__right" onSubmit={propsFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Email address</label>
                                        <Field onChange={(e) => propsFormik.handleChange(e)}
                                            value={propsFormik.values.email}
                                            onBlur={propsFormik.handleBlur}
                                            name="email" type="email" className="form-control" placeholder="Email Address" />
                                        {propsFormik.errors.email && propsFormik.touched.email ? (
                                            <div className="text-danger" >{propsFormik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Password</label>
                                        <Field onChange={(e) => propsFormik.handleChange(e)}
                                            value={propsFormik.values.password}
                                            onBlur={propsFormik.handleBlur}
                                            name="password" type="password" className="form-control" placeholder="Password" />
                                        {propsFormik.errors.password && propsFormik.touched.password ? (
                                            <div className="text-danger" >{propsFormik.errors.password}</div>
                                        ) : null}
                                    </div>
                                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes
                                        described in our privacy policy.</p>
                                    <button className="btn--blue" type="Submit">REGISTER</button>
                                </Form>
                            )}
                        >

                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}
