import React from 'react'
import CheckOutStep from '../../Components/Checkout/CheckOutStep'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { changeAddress, fetchProfileUser } from '../../Store/Action/AccountAct'
import { orderAct } from '../../Store/Action/OrderAct'
function CheckoutDetail() {
    const dispatch = useDispatch()
    const { loadingAddress } = useSelector(state => state.updateAddressReducer)
    const { loadingProfile, profile } = useSelector(state => state.fetchProfileReducer)
    let submitMyForm = null;

    var access_token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).access_token : null;
    const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';
    const userStore = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null


    const itemsArr = cartStore.map(item => {
        const object = {
            product_id: item.id,
            price: item.count * item.price,
            quantity: item.count
        }
        return object
    })
    const totalItems = cartStore.reduce((a, b) => a + b.price * b.count, 0)
    const handleSubmitMyForm = (e) => {
        if (submitMyForm) {
            submitMyForm(e)
        }

    }
    const bindSubmitForm = (submitForm) => {
        submitMyForm = submitForm;
    };

    return (
        <>
            <CheckOutStep step1 step2></CheckOutStep>
            <div className="checkout common-container">
                <div className="checkout__left">
                    <h2>BILLING DETAIL</h2>
                    <Formik
                        initialValues={{
                            address: '',
                            phone: ''
                        }}
                        onSubmit={(data, { setSubmitting }) => {
                            const config = {
                                headers: { Authorization: `Bearer ${access_token}` }
                            };

                            dispatch(changeAddress(data.address, data.phone, config))
                            if (loadingAddress === false) {
                                dispatch(fetchProfileUser(config))
                                if (loadingProfile === false && profile) {
                                    const order = {
                                        address: profile.address,
                                        phone: profile.phone,
                                        items: itemsArr,
                                        total: totalItems
                                    }
                                    dispatch(orderAct(order, config))
                                }
                            }


                            setSubmitting(false);
                        }}
                        render={propFormik => {
                            bindSubmitForm(propFormik.submitForm)
                            return (
                                <Form onSubmit={propFormik.handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Email</label>
                                        <input
                                            value={userStore.email}
                                            disabled
                                            type="email" className="form-control" placeholder="Email" />

                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Address</label>
                                        <input
                                            onChange={propFormik.handleChange}
                                            value={propFormik.values.address}
                                            name="address" type="text" className="form-control" placeholder="Address" />
                                        <div className="text-danger">*thong bao loi</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label fw-bolder">Phone</label>
                                        <input
                                            onChange={propFormik.handleChange}
                                            value={propFormik.values.phone}
                                            name="phone" type="text" className="form-control" placeholder="Phonenumber" />
                                        <div className="text-danger">*thong bao loi</div>
                                    </div>

                                </Form>
                            )
                        }
                        }
                    >
                    </Formik>
                </div>
                <div className="checkout__right">
                    <h2>YOUR ORDER</h2>
                    {/* {loading ? :} */}
                    <button className="btn--orange" onClick={handleSubmitMyForm}>PLACE ORDER</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutDetail
