import React, { useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { fetchProductAdminAct } from '../../../Store/Action/Admin/ProductAdAct';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));
function ProductAd() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const dispatch = useDispatch()
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        fetchProduct()

    }, [dispatch])
    const fetchProduct = () => {
        const admin_token = localStorage.getItem('currentAdmin') ?
            JSON.parse(localStorage.getItem('currentAdmin')).access_token
            : null;

        const config = {
            headers: { Authorization: `bearer ${admin_token}` }
        };
        dispatch(fetchProductAdminAct(config))
    }
    return (
        <>
            {/* Page Content Holder */}
            <div id="content">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        {/* <div className="navbar-header">
                            <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                                <i className="glyphicon glyphicon-align-left" />
                                <span>Toggle Sidebar</span>
                            </button>
                        </div> */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="card text-center">
                        {/* Header */}
                        <div className="card-header myCardHeader">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-left text-primary font-weight-bold">Product List</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" id="btnThem" onClick={handleOpen}>Add Product</button>
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
                                <tbody id="tableDanhSach">

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
            <Modal
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
                        <h2 id="modal-header">Transition modal</h2>
                        <div className="modal-content">
                            <form role="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user" /></span>
                                        </div>
                                        <input type="msnv" name="msnv" id="msnv" className="form-control input-sm" placeholder="Mã số nhân viên" />
                                    </div>
                                    <span className="sp-thongbao" id="tbMaNV" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                        </div>
                                        <input type="name" name="name" id="name" className="form-control input-sm" placeholder="Họ và tên" />
                                    </div>
                                    <span className="sp-thongbao" id="tbTen" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                        </div>
                                        <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email" />
                                    </div>
                                    <span className="sp-thongbao" id="tbEmail" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key" /></span>
                                        </div>
                                        <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Mật khẩu" />
                                    </div>
                                    <span className="sp-thongbao" id="tbMatKhau" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                        </div>
                                        <input type="text" name="ngaylam" id="datepicker" className="form-control" placeholder="Ngày làm" />
                                    </div>
                                    <span className="sp-thongbao" id="tbNgay" />
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                        </div>
                                        <select className="form-control">
                                            <option>Chọn chức vụ</option>
                                            <option>Sếp</option>
                                            <option>Trưởng phòng</option>
                                            <option>Nhân viên</option>
                                        </select>
                                    </div>
                                    <span className="sp-thongbao" id="tbChucVu" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary">Add</button>
                            <button className="btn btn-danger">Close</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>

    )
}

export default ProductAd
