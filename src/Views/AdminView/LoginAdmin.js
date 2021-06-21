import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { validateLoginAdmin } from '../../Services/Validate';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminAct } from '../../Store/Action/Admin/AdminAct';
import { useHistory } from 'react-router-dom';

function LoginAdmin() {
    const dispatch = useDispatch()
    const { loading, accountAdmin } = useSelector(state => state.loginAdminReducer)
    console.log(loading);
    const history = useHistory()
    useEffect(() => {
        if (accountAdmin) {
            history.push('/admin/dashboard')
        }
    }, [dispatch, accountAdmin])
    return (
        <div className="wrap-login">
            <div className="login-content">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={validateLoginAdmin}
                    onSubmit={(data, { setSubmitting, setErrors, resetForm }) => {
                        console.log("dataSubmit", data);
                        dispatch(loginAdminAct(data.username, data.password))
                        resetForm({});
                        // setTimeout(() => {
                        //     if (accountAdmin) {
                        //         history.push('/admin/dashboard')
                        //     } else return
                        // }, 2000);
                    }}
                    render={propsFormik => (
                        <Form className="form__left" onSubmit={propsFormik.handleSubmit}>
                            <h2>LOGIN ADMIN</h2>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Username</label>
                                <Field onChange={(e) => propsFormik.handleChange(e)}
                                    value={propsFormik.values.username}
                                    onBlur={propsFormik.handleBlur}
                                    name="username" type="text" className="form-control" placeholder="Email Address" />
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
                            <button className="btn--blue" type="Submit"> LOGIN </button>
                        </Form>
                    )}
                >

                </Formik>
            </div>
        </div >
    )
}

export default LoginAdmin
