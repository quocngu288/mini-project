import React from 'react'

function Info() {
    return (
        <>
            <div className="info__navbars">
                <div className="info__navbars__wrap common-container">
                    <h2>MY ACCOUNT</h2>
                    <p>ACCOUNT DETAIL</p>
                </div>
            </div>
            <section className="info common-container">

                <div className="info__left">
                    <div className="info__left__head">
                        <img src="../../img/avatar.png" /><p>quocngu <span>#10726</span></p>
                    </div>
                    <div className="info__left__content">
                        <ul>
                            <li><a>DASHBOARD</a></li>
                            <li><a>ORDERS</a></li>
                            <li>
                                <a className="clo-btn">DOWNLOADS</a>
                            </li>
                            <li>
                                <a className="men-btn">ADDRESSES</a>
                            </li>
                            <li><a>ACCOUNT DETAILS</a></li>
                            <li><a>WISHLIST</a></li>
                            <li><a>LOGOUT</a></li>
                        </ul>
                    </div>
                </div>
                <div className="info__right">
                    <form>
                        <div className="form__top">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Display Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Display Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>

                        <h2>PASSWORD CHANGE</h2>
                        <div className="form__bottom">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Display Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Display Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                        <button className="btn--blue">
                            SAVE CHANGES
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Info
