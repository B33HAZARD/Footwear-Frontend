<template>
    <div class="customContainer">
    <Breadcrumbs title="checkout" />
    <div class="sectionPadding">
        <div class="row g-4 justify-content-center overflow-hidden">
            <div class="col-8">
                <BillingDetails />
            </div>
            <div class="col-4">
                <CartTotal />
                <PaymentMethod />
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <router-link to="/order-complete">
                            <button class="placeOrderBtn" @click="handleClearCart">Place an order</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import BillingDetails from "../components/checkout/BillingDetails";
import CartTotal from "../components/checkout/CartTotal";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Breadcrumbs from "@/components/nav/Breadcrumbs.vue";
import { mapMutations } from "vuex";

export default {
    name: "Checkout-component",

    components: {
        BillingDetails,
        CartTotal,
        PaymentMethod,
        Breadcrumbs,
    },

    methods: {

        ...mapMutations([
            'setCartEmpty'
        ]),


        handleClearCart() {
            this.setCartEmpty([]);
        }
    }
}

</script>

<style scoped>

.placeOrderBtn {
    padding: 8px 24px;
    border: none;
    background-color: #595955;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    border-radius: 30px;
    transition: all 250ms ease-in;
}

.placeOrderBtn:hover {
    background-color: #000;
}

</style>