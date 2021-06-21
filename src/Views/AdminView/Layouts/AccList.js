import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAdminAct } from '../../../Store/Action/Admin/Account'
import LoadingChild from '../../../Components/Loading/LoadingChild'
function AccList({ handleClickProductItem }) {
    // onClick={() => handleClick(product.id)}
    const { loading, listdata } = useSelector(state => state.fetchListAdminReducer)
    const dispatch = useDispatch()
    const handleClick = (id) => {
        handleClickProductItem(id)
    }
    const { keyword } = useSelector(state => state.searchReducer)
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(listdata)
        if (keyword) {
            const listAdminFilter = listdata.filter(el => el.name.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1)
            setFilter(listAdminFilter)
        }
    }, [keyword, listdata, dispatch])

    // useEffect(() => {

    // }, [listdata, dispatch])
    const deleteAdmin = (id) => {
        const admin_token = localStorage.getItem('currentAdmin') ?
            JSON.parse(localStorage.getItem('currentAdmin')).access_token
            : null;
        const config = {
            headers: { Authorization: `bearer ${admin_token}` }
        };
        dispatch(deleteAdminAct(id, config))
    }
    return (
        <>
            {listdata && filter ? filter.map((item, index) => {
                return (
                    <tr style={{ cursor: 'pointer' }} onClick={() => handleClick(item.id)} >

                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <img src={item.avata} alt="" />
                        </td>

                        <td>
                            {item.username}
                        </td>
                        <td>{item.email}</td>

                        <td>
                            {/* <button data-toggle="modal" data-target="#courseModal" class="btn btn-info mr-2">
                                sửa
                    </button> */}
                            <button class="btn btn-danger" onClick={() => deleteAdmin(item.id)}>
                                delete
                            </button>
                        </td>
                    </tr>

                )
            }) : <LoadingChild />}
        </>
    )
}

export default AccList
