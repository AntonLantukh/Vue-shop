
import MainPage from '../components/Main';
import Cart from '../components/Cart';
import Products from '../components/Products'


const routes = [
  {
    path: '/main',
    component: MainPage,
    name: 'main-page'
  },
  {
    path: '/products',
    component: Products,
    name: 'products'
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart'
  }
]

export default routes;
