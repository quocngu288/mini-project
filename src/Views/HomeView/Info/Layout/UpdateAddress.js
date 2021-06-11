import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { changeAddress } from '../../../../Store/Action/AccountAct'
import { validateAddress } from '../../../../Services/Validate'
function UpdateAddress() {
    const dispatch = useDispatch()
    var access_token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).access_token : null;
    return (
        <div className="info__right">
            <Formik
                initialValues={{
                    address: '',
                    phone: '',
                }}
                validationSchema={validateAddress}
                onSubmit={data => {
                    const config = {
                        headers: { Authorization: `Bearer ${access_token}` }
                    };
                    dispatch(changeAddress(data.address, data.phone, config))
                }}
                render={(propsFormik) => (
                    <Form onSubmit={propsFormik.handleSubmit}>
                        <div className="form__bottom">
                            <div className="form-group">
                                <label className="form-label fw-bolder">Address</label>
                                <Field onChange={(e) => propsFormik.handleChange(e)}
                                    value={propsFormik.values.address}
                                    name="address" type="text" className="form-control" placeholder="Address" />
                                {propsFormik.errors.address && propsFormik.touched.address ? (
                                    <div className="text-danger" >{propsFormik.errors.address}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Phone</label>
                                <Field onChange={(e) => propsFormik.handleChange(e)}
                                    value={propsFormik.values.phone}
                                    name="phone" type="number" className="form-control" placeholder="Phone" />

                                {propsFormik.errors.phone && propsFormik.touched.phone ? (
                                    <div className="text-danger" >{propsFormik.errors.phone}</div>
                                ) : null}</div>

                        </div>
                        <button className="btn--blue">
                            UPDATE ADDRESS
                        </button>
                    </Form>
                )}
            >
            </Formik>
        </div>
    )
}

export default UpdateAddress
