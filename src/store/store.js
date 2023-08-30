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
}

const mutations = {

    setAllProducts(state, items) {
        state.products = items;
    },

    setSingleProduct(state, item) {
        state.singleProduct = item
    },

    addProductToCart(state, product) {
       if(state.cart.length) {
           const existingItem = state.cart.find(item => item.id === product.id);
           if(existingItem){
               existingItem.count += product.count
           } else
           state.cart.push(product)
       } else
       state.cart.push(product);
    },

    setCartEmpty(state, product) {
        state.cart = product;
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
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;