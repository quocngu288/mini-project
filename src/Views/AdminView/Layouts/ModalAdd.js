import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import './modalAdd.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik'
import { addProductAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
import { useEffect } from 'react';
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
    const [categories, setCategories] = useState([])

    const handleFile = (e) => {
        let file = e.target.files[0]
        let newArr = []
        newArr.push(file)
        setImage(newArr)

    }
    useEffect(() => {

        return () => {

        };
    }, [categories]);
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
                                    name: '',
                                    description: '',
                                    price: 0,
                                    quantities: 0,
                                    categories

                                }}
                                onSubmit={data => {
                                    let imageData = image
                                    let cateData = categories
                                    let formData = new FormData();
                                    formData.append('image', imageData)
                                    formData.append('name', data.name)
                                    formData.append('description', data.description)
                                    formData.append('price', data.price)
                                    formData.append('quantities', data.quantities)
                                    formData.append('categories', cateData)
                                    console.log("type image ", typeof imageData);
                                    console.log("type cate ", typeof cateData);
                                    console.log("image ", imageData);
                                    console.log("cate ", cateData);
                                    dispatch(addProductAdminAct(formData))
                                }}
                                render={propsFormik => (
                                    <Form role="form" onSubmit={propsFormik.handleSubmit}>
                                        <div className="form-group">
                                            <div className="input-group">

                                                <input
                                                    onChange={e => handleFile(e)}
                                                    type="file" multiple name="image" className="form-control input-sm" placeholder="Image" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                                </div>
                                                <input
                                                    onChange={e => propsFormik.handleChange(e)}
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
                                                    onChange={e => propsFormik.handleChange(e)}
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
                                                    onChange={e => propsFormik.handleChange(e)}
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
                                                    onChange={e => propsFormik.handleChange(e)}
                                                    value={propsFormik.values.quantities}
                                                    type="number" name="quantities" className="form-control input-sm" placeholder="Quantities" />
                                            </div>

                                        </div>
                                        <div className="form-group checkbox-group row">
                                            {category ? category.map(cate => {
                                                return (
                                                    <div className="form-check col-4">
                                                        <input className="form-check-input"
                                                            checked={categories.find(sp => sp === cate.id)}
                                                            onChange={e => {

                                                                if (e.target.checked) {
                                                                    let newCate = [...categories]
                                                                    newCate.push(cate.id)
                                                                    setCategories(newCate)

                                                                } else {
                                                                    let newCate = [...categories]
                                                                    let index = newCate.indexOf(cate.id)
                                                                    console.log(index);
                                                                    newCate.splice(index, 1)
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
