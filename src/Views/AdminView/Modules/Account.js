import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingChild from '../../../Components/Loading/LoadingChild';
import Search from '../../../Components/Search/Search'
import { fetchListAdminAct, fetchListDetailAdminAct } from '../../../Store/Action/Admin/Account';
import AccList from '../Layouts/AccList';
import ModalAddAcc from '../Layouts/ModalAddAcc';
import ModalEditAcc from '../Layouts/ModalEditAcc';

function Account() {
    const { loading, listdata } = useSelector(state => state.fetchListAdminReducer)
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const handleOpenEdit = () => {
        setOpenEdit(true);
    };
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    const dispatch = useDispatch()

    useEffect(() => {
        const admin_token = localStorage.getItem('currentAdmin') ?
            JSON.parse(localStorage.getItem('currentAdmin')).access_token
            : null;
        const config = {
            headers: { Authorization: `bearer ${admin_token}` }
        };
        if (admin_token) {
            dispatch(fetchListAdminAct(config))
        }

    }, [dispatch])
    const handleClickProductItem = (id) => {
        dispatch(fetchListDetailAdminAct(id))
        setOpenEdit(true)
    }
    return (
        <>
            <div id="content">
                <div className="container">
                    <div className="card text-center">
                        {/* Header */}
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">ADMIN</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" onClick={handleOpenAdd}>Add Account Admin</button>
                                </div>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <Search />
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


                                    <AccList handleClickProductItem={handleClickProductItem} />



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
            <ModalAddAcc open={openAdd} handleClose={handleCloseAdd} />
            <ModalEditAcc open={openEdit} handleClose={handleCloseEdit} />
        </>
    )
}

export default Account
