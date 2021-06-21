import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Item from '../Layouts/Item';
import LoadingChild from '../../../../Components/Loading/LoadingChild'
import _ from 'lodash'
import { useEffect } from 'react';
const List = ({ select, setSelect }) => {
    const [filterSelect, setFilterSelect] = useState([])
    const { loading, cateProduct, errors } = useSelector(state => state.CateProductReducer)
    console.log(loading, cateProduct, errors);
    useEffect(() => {
        handleFilterSelect()
    }, [cateProduct, select])
    console.log("select", select);
    const handleFilterSelect = () => {
        switch (select) {
            case "1": {
                setFilterSelect(cateProduct.sort((sp1, sp2) => sp1.price - sp2.price))
                setSelect("0")
                break;
            }
            case "2": {
                setFilterSelect(cateProduct.sort((sp1, sp2) => sp2.price - sp1.price))
                console.log(cateProduct);
                setSelect("0")
                break;
            }
            default: setFilterSelect(cateProduct)
        }
    }
    return (
        <section className="product-list">
            {loading || _.isEmpty(filterSelect) ? <div className="loading"><LoadingChild /></div> : (
                <div className="product__items">
                    {
                        filterSelect.map(item => {
                            return (
                                <Item item={item} key={item.id} />
                            )
                        })
                    }
                </div>
            )


            }


        </section>
    )
}

export default List;
