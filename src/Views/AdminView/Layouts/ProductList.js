import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function ProductList({ products, handleClickProductItem }) {

    const { keyword } = useSelector(state => state.searchReducer)
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setFilter(products)
        if (keyword) {
            const productsFilter = products.filter(el => el.name.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1)
            setFilter(productsFilter)
        }
    }, [keyword])
    console.log(filter);
    const handleClick = (id) => {
        handleClickProductItem(id)
    }
    return (
        // onClick={() => handleClickProductItem(product.id)}
        // 
        <>
            {filter !== null ? filter.map((product, index) => {
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
                            <button data-toggle="modal" data-target="#courseModal" class="btn btn-info mr-2">
                                sửa
                    </button>
                            <button class="btn btn-danger">
                                xóa
                    </button>
                        </td>
                    </tr>

                )
            }) : null}
        </>




    )
}

export default ProductList
