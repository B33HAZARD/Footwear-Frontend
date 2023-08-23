import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    quantity: 3,
    price: 30
}

const getters = {
    totalPrice: state => state.quantity * state.price
}

const actions = {
    increment: ({commit}) => commit('increment'),
    decrement: ({commit}) => commit('decrement'),
    
}

const mutations = {
    increment(state) {
        state.quantity++
    },
    decrement(state) {
        state.quantity--
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;