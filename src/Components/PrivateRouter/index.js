import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { notify } from '../../Services/Alert';

const index = ({ component: Component, ...rest }) => {
    //get currentuser từ store lên
    const userStore = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null;

    return (
        <Route
            {...rest}
            render={props => {
                // chưa đăng nhập nên chuyển hướng đến trang đăng nhập
                if (!userStore) {
                    notify("error", "Login is neccessary !!!")
                    return <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
                }
                //kiểm tra định tuyến bị hạn chê bởi roles
                // if (roles && roles.indexOf(currenUser.role) === -1) {  //đúng
                //     //role không được ủy quyền nên chuyển hương đến trang chủ
                //     return <Redirect to={{ pathname: '/admin/login' }} />
                // }
                // ủy quyền trả về thành phần
                return <Component {...props} />
            }}
        />


    )
}
export default index