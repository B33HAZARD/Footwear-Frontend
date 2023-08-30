// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your Vue components
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";

Vue.use(VueRouter);

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/product/:id', name: "ProductDetails", component: ProductDetails },
  { path: '/cart', name: "Cart", component: Cart },
  { path: '/checkout', name: "Checkout", component: Checkout },
  { path: '/order-complete', name: "OrderComplete", component: OrderComplete }
];

const router = new VueRouter({
  routes
});

export default router;