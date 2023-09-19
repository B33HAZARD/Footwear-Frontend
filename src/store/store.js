import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const state = {
    products: null,
    singleProduct: null,
    cart: [],
}

const getters = {
    products: state => state.products,
    product: state => state.singleProduct,
    getCart: state => state.cart,
    // getCart: (state) => {
    //     const cart = localStorage.setItem('localCart', state.cart);
    //     return cart;
    // }

}

const mutations = {

    setAllProducts(state, items) {
        state.products = items;
    },

    setSingleProduct(state, item) {
        state.singleProduct = item
    },

    setCart(state, cart) {
        state.cart = cart;
    },

    addProductToCart(state, product) {
       if(state.cart.length) {
           const existingItem = state.cart.find(item => item.id === product.id);
           if(existingItem){
               existingItem.count += product.count;
           } else
           state.cart.push(product);
       } else
       state.cart.push(product);
    },

    removeSingleProduct(state, productIndex) {
        state.cart.splice(productIndex, 1);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    setCartEmpty(state, product) {
        state.cart = product;
        localStorage.clear();
    }
}

const actions = {

    getProducts: async ({commit}) => {
        await axios
        .get('https://fakestoreapi.com/products')
        .then(response => {
            commit('setAllProducts', response.data);
        })
        .catch(err => console.log(err))
    },

    getProductDetails: async ({commit}, id) =>  {
            await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
            commit('setSingleProduct', response.data);
        })
    },

    addToCart:  ({commit, state}, product) => {
        commit('addProductToCart', product);
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;