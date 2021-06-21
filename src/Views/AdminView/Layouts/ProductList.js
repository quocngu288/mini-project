import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import LoadingChild from '../../../Components/Loading/LoadingChild'
import { deleteProductAdmin } from '../../../Store/Action/Admin/ProductAdAct';
function ProductList({ handleClickProductItem }) {

    const { keyword } = useSelector(state => state.searchReducer)
    const [filter, setFilter] = useState([]);
    const { loading, products } = useSelector(state => state.productAdminReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        setFilter(products)
        if (keyword) {
            const productsFilter = products.filter(el => el.name.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1)
            setFilter(productsFilter)
        }
    }, [keyword, products])
    const handleClick = (id) => {
        handleClickProductItem(id)
    }
    const handleClickDelete = (id) => {
        const admin_token = localStorage.getItem('currentAdmin') ?
            JSON.parse(localStorage.getItem('currentAdmin')).access_token
            : null;
        const config = {
            headers: { Authorization: `bearer ${admin_token}` }
        };
        dispatch(deleteProductAdmin(id, config))
    }
    return (

        <>
            {products && filter ? filter.map((product, index) => {
                return (
                    <tr style={{ cursor: 'pointer' }} onClick={() => handleClick(product.id)}>

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
                            <button class="btn btn-danger" onClick={() => handleClickDelete(product.id)}>
                                delete
                            </button>
                        </td>
                    </tr>

                )
            }) : <LoadingChild />}
        </>




    )
}

export default ProductList
