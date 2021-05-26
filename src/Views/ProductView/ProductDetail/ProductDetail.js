import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetail(props) {
    let { id } = useParams()
    console.log('param', id);

    return (
        <div>
            <h1> Sản phẩm có id : {id}</h1>
        </div>
    )
}

export default ProductDetail
