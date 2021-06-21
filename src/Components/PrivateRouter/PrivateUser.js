import React from 'react'
import { Route, Redirect, useRouteMatch, useLocation } from 'react-router-dom'
import { notify } from '../../Services/Alert';

const PrivateUser = ({ component: Component, ...rest }) => {
    const userStore = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).user : null;
    const { url } = useRouteMatch()
    return (
        <Route
            {...rest}
            render={props => {
                // chưa đăng nhập nên chuyển hướng đến trang đăng nhập
                if (!userStore) {
                    notify("error", "Login is neccessary !!!")
                    return <Redirect to={{
                        pathname: `${url}/product`,
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
export default PrivateUser