import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const state = {
    products: null,
    singleProductId: null,
    singleProduct: null,
    price: 30,
    size: 7,
    quantity: 1,
    cart: [],
}

const getters = {
    products: state => state.products,
    product: state => state.singleProduct,
    totalPrice: state => state.quantity * state.price,
    getSize: state => state.size,
    getQuantity: state => state.quantity,
}

const mutations = {

    setAllProducts(state, items) {
        state.products = items;
    },

    setSingleProduct(state, item) {
        state.singleProduct = item
    },

    updateItemCount(state, inputValue) {
        state.quantity = inputValue;
    },

    updateSize(state, size) {
        state.size = size;
    },

    setPrice(state, price) {
        state.price = price;
    },

    addProductToCart(state, product) {
        state.cart.push({...product, quantity: 1})
    },

    incrementProduct() {
       console.log("working on it")
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
            console.log("Just one product: ", response.data);
            commit('setSingleProduct', response.data);
        })
    },

    addTocart({commit}, product) {
        // const existingProduct = state.cart.find(item => item.id == product.id);

        // if(existingProduct) {
        //     commit('incrementProduct', existingProduct);
        // } else
        commit('addProductToCart', product);
    }
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;