import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../Store/Action/UserAct';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import LoadingBottom from '../Components/Loading/LoadingBottom'
import _ from 'lodash'
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
export default function Header() {
    const [isShowLogin, setIsShowLogin] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';
    const user = useSelector(state => state.loginReducer)
    let userLogin = user.userLogin
    let loadingLogin = user.loading
    useEffect(() => {
        console.log("render");
    }, [dispatch, userLogin, isShowLogin, Link, history])


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
        } else {
            return (
                <Link to={'/account'}>ACCOUNT</Link>
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

                    {checkShowAccount(userLogin)}

                    <div className="price">CART / $<span>0.0</span></div>
                    <strong className="cart">{cartStore.length}</strong>
                </div>
            </header>
            <div id="myModal" className="modal" style={isShowLogin ? { display: 'block' } : { display: 'none' }}>
                <span className="close" onClick={handleClickLogin}>×</span>
                <div className="modal-content">
                    <div className="content__left">
                        <h2>LOGIN</h2>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
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
                                        <label className="form-label fw-bolder">Email address</label>
                                        <Field onChange={propsFormik.handleChange}
                                            value={propsFormik.values.username || ''}
                                            name="username" type="email" className="form-control" placeholder="Email Address" />
                                        <div className="text-danger">*thong bao loi</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Password</label>
                                        <Field onChange={propsFormik.handleChange}
                                            value={propsFormik.values.password || ''}
                                            name="password" type="password" className="form-control" placeholder="Password" />
                                        <div className="text-danger">*thong bao loi</div>
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
                            onSubmit={data => {
                                dispatch(register(data.email, data.password))
                                setIsShowLogin(false)
                            }}
                            render={propsFormik => (
                                <Form className="form__right" onSubmit={propsFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Email address</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="email" type="email" className="form-control" placeholder="Email Address" />
                                        <div className="text-danger">*thong bao loi</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Password</label>
                                        <Field onChange={propsFormik.handleChange}
                                            name="password" type="password" className="form-control" placeholder="Password" />
                                        <div className="text-danger">*thong bao loi</div>
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
