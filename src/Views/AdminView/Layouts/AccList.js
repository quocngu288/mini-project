import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAdminAct } from '../../../Store/Action/Admin/Account'

function AccList({ listdata, handleClickProductItem }) {
    // onClick={() => handleClick(product.id)}
    const dispatch = useDispatch()
    const handleClick = (id) => {
        handleClickProductItem(id)
    }
    const deleteAdmin = (id) => {
        dispatch(deleteAdminAct(id))
    }
    return (
        <>
            { listdata.map((item, index) => {
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
                                xóa
                    </button>
                        </td>
                    </tr>

                )
            })}
        </>
    )
}

export default AccList
