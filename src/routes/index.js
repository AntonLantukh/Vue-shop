
import MainPage from '../components/Main';
import Cart from '../components/Cart';
import Products from '../components/Products'
import Contacts from '../components/Contacts'
import Main from '../components/Main'

const routes = [
  {
    path: '/main',
    component: Main,
    name: 'main'
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
  },
  {
    path: '/contacts',
    component: Contacts,
    name: 'contacts'
  },
  {
    path: '/',
    redirect: '/products',
  }
]

export default routes;
