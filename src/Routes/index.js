import Product from '../Views/ProductView/index'
import Info from '../Views/HomeView/Info/Info'
import Cart from '../Views/CartView/Cart'
import ProductDetail from '../Views/ProductView/ProductDetail/ProductDetail'
export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Product />,
        routes: [
            { path: '/account', component: <Info /> }
        ]
    },
    {
        path: '/account',
        exact: true,
        main: () => <Info />,
    },
    {
        path: '/product',
        exact: true,
        main: () => <Product />,
    },
    {
        path: '/product/:id',
        exact: true,
        main: () => <ProductDetail />,
    },
    {
        path: '/cart',
        exact: true,
        main: () => <Cart />,
    },
]