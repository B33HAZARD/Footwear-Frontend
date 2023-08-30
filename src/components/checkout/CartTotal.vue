<template>
    <section class="billDetailsWrapper mb-4 cartBlockPadding">
        <h2>Cart Total</h2>
        <ul class="totalBreakdown">
            <li>
                <span>Subtotal</span>
                <span>${{ calculateSubtotal }}</span>
            </li>
            <li v-for="(item, i) in getCart" :key="i">
                <span>{{ item.count }} x {{ item.title }}</span>
                <span>${{ item.totalPrice }}</span>
            </li>
            <li>
                <span>Shipping</span>
                <span>$8.75</span>
            </li>
            <li class="fw-bold">
                <span>Order Total</span>
                <span class="text-truncate">${{ calculateOrderTotalCharges }}</span>
            </li>
        </ul>
    </section>
</template>


<script>

import { mapGetters } from 'vuex';

export default {
    name: 'CartTotal-component',

    data() {
        return {
        }
    },

    methods: {

    },

    computed: {
        ...mapGetters([
            'getCart'
        ]),

        calculateSubtotal() {
            let subtotal = 0;
            for(let i = 0; i < this.getCart.length; i++) {
                console.log(this.getCart[i].totalPrice)
                subtotal += this.getCart[i].totalPrice;
            }
            console.log(subtotal)
            return subtotal;
        },

        calculateOrderTotalCharges() {
            let orderTotal = this.calculateSubtotal;
            orderTotal += 8.75;
            console.log(orderTotal, "total price");
            return orderTotal;
        }
    }
}

</script>


<style scoped>
@import "./checkout.css";
</style>