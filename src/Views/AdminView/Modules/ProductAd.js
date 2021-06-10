import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../Layouts/ModalEdit';

import { fetchCategoryAdminAct, fetchProductAdminAct, fetchProductDetailAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
import LoadingChild from '../../../Components/Loading/LoadingChild';
import ModalAdd from '../Layouts/ModalAdd';

function ProductAd() {
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    // const [_id, set_IdProduct] = useState(null);

    const dispatch = useDispatch()
    const { loading, products } = useSelector(state => state.productAdminReducer)

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const handleOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    useEffect(() => {
        setTimeout(() => {
            const admin_token = localStorage.getItem('currentAdmin') ?
                JSON.parse(localStorage.getItem('currentAdmin')).access_token
                : null;
            const config = {
                headers: { Authorization: `bearer ${admin_token}` }
            };
            if (admin_token) {
                dispatch(fetchProductAdminAct(config))
                dispatch(fetchCategoryAdminAct(config))
            }

        }, 1000);
    }, [])

    const handleClickProductItem = (idProduct) => {
        dispatch(fetchProductDetailAdminAct(idProduct))
        setOpenEdit(true)
    }

    return (
        <>
            {/* Page Content Holder */}
            <div id="content">
                <div className="container">
                    <div className="card text-center">
                        {/* Header */}
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">Product List</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" id="btnThem" onClick={handleOpenAdd}>Add Product</button>
                                </div>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Tên nhân viên" id="searchName" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-bordered table-hover myTable">
                                <thead className="text-primary">
                                    <tr>
                                        <th className="nowrap">
                                            <span className="mr-1">STT</span>
                                            <i className="fa fa-arrow-up" id="SapXepTang" />
                                            <i className="fa fa-arrow-down" id="SapXepGiam" />
                                        </th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th><em className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {loading ? <LoadingChild /> : products ? products.map((product, index) => {
                                        return (
                                            <tr style={{ cursor: 'pointer' }} onClick={() => handleClickProductItem(product.id)}>

                                                <td>{index + 1}</td>
                                                <td>{product.name}</td>
                                                <td>
                                                    <img src="" alt="" />
                                                </td>
                                                <td>
                                                    {product.quantities}
                                                </td>
                                                <td>$<span>{product.price}</span></td>

                                                <td>
                                                    <button data-toggle="modal" data-target="#courseModal" class="btn btn-info mr-2">
                                                        sửa
                                                            </button>
                                                    <button class="btn btn-danger">
                                                        xóa
                                                            </button>
                                                </td>


                                            </tr>
                                        )
                                    }) : ""}


                                </tbody>
                            </table>
                        </div>
                        {/* Footer */}
                        <div className="card-footer myCardFooter">
                            <nav>
                                <ul className="pagination justify-content-center" id="ulPhanTrang">
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Modal */}
            <ModalEdit open={openEdit} handleClose={handleCloseEdit} />
            <ModalAdd open={openAdd} handleClose={handleCloseAdd} />

        </>

    )
}

export default ProductAd
