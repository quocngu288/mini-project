import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changePassword, fetchProfileUser, updateProfile } from '../../../../Store/Action/AccountAct'
import { Formik, Form, Field } from 'formik'
import { validateChangePass } from '../../../../Services/Validate'
function ShowInfo() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProfileUser())
    }, [])
    return (
        <div className="info__right">
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    username: '',
                    email: ''
                }}
                onSubmit={data => {
                    dispatch(updateProfile(data.firstname, data.lastname, data.username, data.email))
                }}
                render={(propFormik) => (
                    <Form onSubmit={propFormik.handleSubmit}>
                        <div className="form__top">
                            <div className="form-group">
                                <label className="form-label fw-bolder">First Name</label>
                                <input onChange={propFormik.handleChange}
                                    name="firstname" type="text" className="form-control" placeholder="Fist Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Last Name</label>
                                <input onChange={propFormik.handleChange}
                                    name="lastname" type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Username</label>
                                <input onChange={propFormik.handleChange}
                                    name="username" type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Email</label>
                                <input onChange={propFormik.handleChange}
                                    name="email" type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <button className="btn--blue">
                            UPDATE PROFILE
                    </button>
                    </Form>
                )}
            >
            </Formik>
            <Formik
                initialValues={{
                    password: '',
                    password_confirmation: ''
                }}
                validationSchema={validateChangePass}
                onSubmit={data => {
                    dispatch(changePassword(data.password, data.password_confirmation))
                }}
                render={propsFormik =>
                (
                    <Form onSubmit={propsFormik.handleSubmit}>
                        <h2>PASSWORD CHANGE</h2>
                        <div className="form__bottom">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">New Password</label>
                                <Field onChange={(e) => propsFormik.handleChange(e)}
                                    value={propsFormik.values.password}
                                    name="password" type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {propsFormik.errors.password && propsFormik.touched.password ? (
                                    <div className="text-danger" >{propsFormik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Confirm New Password</label>
                                <Field onChange={(e) => propsFormik.handleChange(e)}
                                    value={propsFormik.values.password_confirmation}
                                    name="password_confirmation" type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                {propsFormik.errors.password_confirmation && propsFormik.touched.password_confirmation ? (
                                    <div className="text-danger" >{propsFormik.errors.password_confirmation}</div>
                                ) : null}
                            </div>

                        </div>
                        <button className="btn--blue">
                            CHANGES PASSWORD
                        </button>
                    </Form>
                )

                }
            >

            </Formik>

        </div>
    )
}

export default ShowInfo
