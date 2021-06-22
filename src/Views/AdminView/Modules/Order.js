import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingChild from '../../../Components/Loading/LoadingChild';
import Search from '../../../Components/Search/Search';
import { fetchOrderdAdminAct } from '../../../Store/Action/Admin/Order';


function Order() {

    // const [_id, set_IdProduct] = useState(null);

    const dispatch = useDispatch()
    const {order}=useSelector(state=>state.orderAdminReducer)
    useEffect(() => {
        const admin_token = localStorage.getItem('currentAdmin') ?
            JSON.parse(localStorage.getItem('currentAdmin')).access_token
            : null;
        const config = {
            headers: { Authorization: `bearer ${admin_token}` }
        };
        if (admin_token) {
            dispatch(fetchOrderdAdminAct(config))
        }



    }, [dispatch])





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
                                    <h3 className="text-left text-primary font-weight-bold">ORDER LIST</h3>
                                </div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-primary" id="btnThem" >Add Oder</button>
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
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Created</th>
                                        <th><em className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {order ? order.map((item,index)=>{
                                        return(
                                            <tr style={{ cursor: 'pointer' }}>
                                                <td>{index + 1}</td>
                                  
                                                {/* <td>
                                                    <img src={item.avata} alt="" />
                                                </td> */}
        
                                        
                                                {item.products.map(i=>{
                                                    return(  
                                                     <>
                                                        <td>{i.name}</td>
                                                        <td>
                                                            {i.quantities}
                                                        </td>
                                                        <td>{i.price}</td> 
                                                    </>  
                                                    )
                                                })}
                                                <td>{item.created_at}</td>
                                                <td>
                                                    <button class="btn btn-primary">
                                                        {item.status}
                                                    </button>
                                                </td>
                                        </tr>
                                        )
                                    }): <LoadingChild/>}
                                   
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



        </>

    )
}

export default Order
