import Goods from 'components/goods'
import Ratings from 'components/ratings'
import Seller from 'components/seller'

export default [
    {
        path:'/',
        redirect: 'goods',
    },
    {
        name:'goods',
        path: '/goods',
        component: Goods
    },
    {
        path: '/ratings',
        component: Ratings
    },
    {
        path: '/seller',
        component: Seller
    },

]