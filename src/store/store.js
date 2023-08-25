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
}

const getters = {
    products: state => state.products,
    product: state => state.singleProduct,
    totalPrice: state => state.quantity * state.price,
    getSize: state => state.size,
    getQuantity: state => state.quantity,
}

const mutations = {

    getAllProducts(state, items) {
        state.products = items;
    },

    getProductId(state, id) {
        console.log("mutations id: ", id)
        state.singleProductId = id;
    },

    getSingleProduct(state, item) {
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
    }

}

const actions = {

    getProducts: async ({commit}) => {
        await axios
        .get('https://fakestoreapi.com/products')
        .then(response => {
            commit('getAllProducts', response.data);
        })
        .catch(err => console.log(err))
    },

    getProductDetails: async ({commit}, id) =>  {
            await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
            console.log("Just one product: ", response.data);
            commit('getSingleProduct', response.data);
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