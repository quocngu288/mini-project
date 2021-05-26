import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, fetchProductByCategory } from '../Store/Action/ProductAct'
import LoadingChild from '../Components/Loading/LoadingChild';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: "100%"
//     },

// }));
export default function AsideProduct() {


    const { loading, category, errors } = useSelector(state => state.CategoryReducer)
    console.log(loading, category, errors);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("fetch");
        dispatch(fetchCategory())
        dispatch(fetchProductByCategory(1))
    }, [])

    const clickCategory = (id) => {
        dispatch(fetchProductByCategory(id))
    }
    // const classes = useStyles();

    return (
        <section className="aside">
            <div className="brown">
                <h2>BROWN</h2>
                {loading ? <div className="loading"><LoadingChild /></div> : (
                    category.map(item => {
                        return (
                            <>
                                {
                                    item.subCategory.length === 0 ? (
                                        <div className="brown__item">
                                            <a onClick={() => clickCategory(item.id)}>{item.name}</a>
                                        </div>
                                    ) : (
                                        <Accordion className="brown__item-dropdown">
                                            <AccordionSummary
                                                className="brown__item-dropdown__content"
                                                expandIcon={<ExpandMoreIcon />}
                                            >
                                                <p>{item.name}</p>
                                            </AccordionSummary>

                                            {item.subCategory.map(itemchild => {
                                                return (
                                                    <AccordionDetails className="brown__item-dropdown__detail">
                                                        <a onClick={() => clickCategory(itemchild.id)}>
                                                            {itemchild.name}
                                                        </a>
                                                    </AccordionDetails>
                                                )
                                            })}

                                        </Accordion>
                                    )
                                }
                            </>

                        )
                    })
                )}
                {/* <li><a>Bags</a></li>
                    <li><a>Booking</a></li>
                    <li>
                        <a className="clo-btn" onClick={handleCliclDropDownClo}>Clothings
                            <span className={isDropDownClo ? 'fas fa-caret-down rotate' : 'fas fa-caret-down'}></span></a>
                        <ul className={isDropDownClo ? 'show' : 'close'}>
                            <li><a>Hoodies</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className="men-btn" onClick={handleCliclDropDownMen}>Men
                        <span className={isDropDownMen ? 'fas fa-caret-down rotate' : 'fas fa-caret-down'}></span></a>

                        <ul className={isDropDownMen ? 'show' : 'close'}>
                            <li><a>ABC</a></li>
                            <li><a>XYZ</a></li>
                        </ul>
                    </li>
                    <li><a>Poster</a></li>
                    <li>
                        <a className="sho-btn" onClick={handleCliclDropDownSho}>Shoes
                        <span className={isDropDownSho ? 'fas fa-caret-down rotate' : 'fas fa-caret-down'} ></span>
                        </a>
                        <ul className={isDropDownSho ? 'show' : 'close'}>
                            <li><a>ABC</a></li>
                            <li><a>XYZ</a></li>
                        </ul>
                    </li>
                    <li><a>Uncategolize</a></li>
                    <li><a>Woment</a></li> */}
                {/* </ul> */}
            </div>

            <div className="filter">
                <h2>FILTER</h2>
                <ul>
                    <li><a>Black</a></li>
                    <li><a>Blue</a></li>
                </ul>
                <h2>
                    FILTER BY PRICE
                </h2>
            </div>
        </section >
    )
}
