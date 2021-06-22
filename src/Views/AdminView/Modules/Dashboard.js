import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import LoadingChild from '../../../Components/Loading/LoadingChild'
import { fetchDashboardAdminAct } from '../../../Store/Action/Admin/Dashboard'

function Dashboard() {
    const dispatch=useDispatch()
    const {dashboard}=useSelector(state=>state.dashboardAdminReducer)
    useEffect(()=>{
        const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    if(admin_token){
      dispatch(fetchDashboardAdminAct(config))  
    }

    },[])
    return (
        <div className="wrapper">
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard v2</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v2</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Info boxes */}
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">CPU Traffic</span>
                                        <span className="info-box-number">
                                            10
                  <small>%</small>
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Likes</span>
                                        <span className="info-box-number">41,410</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            {/* fix for small devices only */}
                            <div className="clearfix hidden-md-up" />
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Sales</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">New Members</span>
                                        <span className="info-box-number">2,000</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                        </div>
            
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <div className="col-md-8">
                                {/* MAP & BOX PANE */}
                     
                            
                                {/* /.row */}
                                {/* TABLE: LATEST ORDERS */}
                                <div className="card">
                                    <div className="card-header border-transparent">
                                        <h3 className="card-title">Product</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">
                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Quantities</th>
                                                        <th>Id Product</th>
                                                        <th>User</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dashboard ? dashboard.map((item,i)=>{
                                                        return(
                                                            <tr>
                                                            <td>{item.product_name}</td>
                                                            <td>{item.quantities}</td>
                                                            <td><span className="badge badge-success">{item.product_id}</span></td>
                                                            <td>
                                                                <div className="sparkbar" data-color="#00a65a" data-height={20}>
                                                                    {item.user}
                                                                   </div>
                                                            </td>
                                                        </tr>
                                                        )
                                                    }):<LoadingChild/>}
                                               
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.table-responsive */}
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer clearfix">
                                        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New
                  Order</a>
                                        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All
                  Orders</a>
                                    </div>
                                    {/* /.card-footer */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-4">
                                {/* Info Boxes Style 2 */}
                                <div className="info-box mb-3 bg-warning">
                                    <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Inventory</span>
                                        <span className="info-box-number">5,200</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-success">
                                    <span className="info-box-icon"><i className="far fa-heart" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Mentions</span>
                                        <span className="info-box-number">92,050</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-danger">
                                    <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Downloads</span>
                                        <span className="info-box-number">114,381</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box mb-3 bg-info">
                                    <span className="info-box-icon"><i className="far fa-comment" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Direct Messages</span>
                                        <span className="info-box-number">163,921</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>

                             
                             
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/*/. container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
      
            {/* /.control-sidebar */}
            {/* Main Footer */}
        </div>

    )
}

export default Dashboard
