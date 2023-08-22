// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your Vue components
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/product/:id', name: "ProductDetails", component: ProductDetails },
];

const router = new VueRouter({
  routes
});

export default router;