import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { changeAddress } from '../../../../Store/Action/AccountAct'
function UpdateAddress() {
    const dispatch = useDispatch()
    return (
        <div className="info__right">
            <Formik
                initialValues={{
                    address: '',
                    phone: '',
                }}
                onSubmit={data => {
                    dispatch(changeAddress(data.address, data.phone))
                }}
                render={(propFormik) => (
                    <Form onSubmit={propFormik.handleSubmit}>
                        <div className="form__bottom">
                            <div className="form-group">
                                <label className="form-label fw-bolder">Address</label>
                                <input onChange={propFormik.handleChange}
                                    name="address" type="text" className="form-control" placeholder="Address" />
                            </div>
                            <div className="form-group">
                                <label className="form-label fw-bolder">Phone</label>
                                <input onChange={propFormik.handleChange}
                                    name="phone" type="number" className="form-control" placeholder="Phone" />
                            </div>

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
