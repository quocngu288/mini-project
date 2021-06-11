import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import './modalAdd.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik'
import { addProductAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
;


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },

}));
function ModalAdd({ open, handleClose }) {
    const classes = useStyles();
    const { loading, category } = useSelector(state => state.categoryAdminReducer)
    const dispatch = useDispatch()

    const [image, setImage] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [quantities, setQuantities] = useState(0)
    const [categories, setCategories] = useState([])

    const handleFileChange = (e) => {
        if (!e.target.files) {
            return;
        }
        let file = e.target.files[0];
        let newArr = []
        newArr.push(file.name)
        console.log("newArr", newArr);
        setImage(newArr);
        console.log('image', image);
    }
    return (
        <>
            {open ? (
                <Modal
                    style={{ zIndex: 0 }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >

                    <Fade in={open}>
                        <div className="wrap-modal">
                            <h2 id="modal-header">Add Product</h2>
                            <Formik
                                initialValues={{
                                    image,
                                    name,
                                    description,
                                    price,
                                    quantities,
                                    categories

                                }}
                                onSubmit={data => {
                                    console.log(data);
                                    // await new Promise((r) => setTimeout(r, 500));
                                    const temp = { ...data, image, name, description, price, quantities, categories }
                                    console.log("click", temp.image);
                                    dispatch(addProductAdminAct(temp.image, temp.name, temp.description, temp.price, temp.quantities, temp.categories))
                                }}
                                render={propsFormik => (
                                    <Form role="form" onSubmit={propsFormik.handleSubmit}>
                                        <div className="form-group">
                                            <div className="input-group">

                                                <input
                                                    onChange={
                                                        handleFileChange
                                                    }
                                                    value={propsFormik.values.image}
                                                    type="file" name="image" className="form-control input-sm" placeholder="Image" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                                </div>
                                                <input
                                                    onChange={e => {
                                                        propsFormik.handleChange(e)
                                                        setName(e.target.value)
                                                    }}
                                                    value={propsFormik.values.name}
                                                    type="text" name="name" className="form-control input-sm" placeholder="Name" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                                </div>
                                                <input
                                                    onChange={e => {
                                                        propsFormik.handleChange(e)
                                                        setDescription(e.target.value)
                                                    }}
                                                    value={propsFormik.values.description}
                                                    type="text" name="description" className="form-control input-sm" placeholder="Description" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-key" /></span>
                                                </div>
                                                <input
                                                    onChange={e => {
                                                        propsFormik.handleChange(e)
                                                        setPrice(e.target.value)
                                                    }}
                                                    value={propsFormik.values.price}
                                                    type="number" name="price" className="form-control input-sm" placeholder="Price" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-key" /></span>
                                                </div>
                                                <input
                                                    onChange={e => {
                                                        propsFormik.handleChange(e)
                                                        setQuantities(e.target.value)
                                                    }}
                                                    value={propsFormik.values.quantities}
                                                    type="number" name="quantities" className="form-control input-sm" placeholder="Quantities" />
                                            </div>

                                        </div>
                                        <div className="form-group checkbox-group row">
                                            {category ? category.map(cate => {
                                                return (
                                                    <div className="form-check col-4">
                                                        <input className="form-check-input"
                                                            value={cate.id}
                                                            // checked={propsFormik.values.categories.includes(cate.id)}
                                                            onChange={e => {
                                                                if (e.target.checked) {
                                                                    const newCate = [...categories, cate.id]
                                                                    // newCate.push(cate.id)
                                                                    setCategories(newCate)
                                                                } else {
                                                                    const newCate = [...categories]
                                                                    const idRemove = propsFormik.values.categories.indexOf(cate.id)
                                                                    newCate.splice(1, idRemove)
                                                                    setCategories(newCate)
                                                                }
                                                            }}
                                                            name="categories" type="checkbox" />
                                                        <label className="form-check-label" >
                                                            {cate.name}
                                                        </label>
                                                    </div>
                                                )
                                            }) : null}

                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                            <button className="btn btn-danger">Close</button>
                                        </div>
                                    </Form>
                                )}
                            >
                            </Formik>


                        </div>


                    </Fade>
                </Modal>
            ) : null}


        </>
    )
}

export default ModalAdd
