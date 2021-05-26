import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRouter = ({ component: Component, roles, ...rest }) => {
    //get currentuser từ store lên
    // const currentRouter=   adfdsfdsfs

    return (
        <Route
            {...rest}
            render={routeProps => {
                // chưa đăng nhập nên chuyển hướng đến trang đăng nhập
                if (!currenUser) {
                    return <Redirect to={{
                        pathname: '/login',
                        state: { from: routeProps.location }
                    }} />
                }
                //kiểm tra định tuyến bị hạn chê bởi roles
                if (roles && roles.indexOf(currenUser.role) === -1) {  //đúng
                    //role không được ủy quyền nên chuyển hương đến trang chủ
                    return <Redirect to={{ pathname: '/' }} />
                }
                // ủy quyền trả về thành phần
                return <Component {...props} />
            }}
        />


    )
}
export default PrivateRouter