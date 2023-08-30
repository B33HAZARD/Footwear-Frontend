<template>
    <div class="customContainer">
        <Breadcrumbs title="purchase complete" />
        <div class="sectionPadding">
            <div class="row g-0 justify-content-center align-items-center">
                <section class="col-auto">
                    <div class="orderSuccess">
                        <span>
                            <Icon icon="bi:check2" />
                        </span>
                    </div>
                </section>
                <section class="col-12 text-center orderSuccessMsg">
                    <h2>Thank you for purchasing, your order is complete</h2>
                </section>
                <section class="col-auto mb-4">
                    <router-link to="/">
                        <button class="orderSuccessBtn me-2">Home</button>
                    </router-link>
                    <router-link to="/">
                        <button class="orderSuccessBtn"><span><Icon icon="ion:cart-outline" /></span> Continue Shopping</button>
                    </router-link>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue2';
import Breadcrumbs from '@/components/nav/Breadcrumbs.vue';

export default {
    name: "OrderComplete-component",
    components: {
        Icon,
        Breadcrumbs,
    }
}

</script>

<style scoped>

.orderSuccess {
    background-color: #FAFAFA;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.orderSuccess span {
    color: #88C8BC;
    font-weight: bold;
    font-size: 96px;
}

.orderSuccessMsg h2 {
    line-height: 1.5;
    color: #000;
    font-weight: 400;
    font-family: 'Rokkitt', serif;
    margin-bottom: 20px !important;
}

.orderSuccessBtn {
    padding: 8px 20px;
    border: 1px solid black;
    background-color: #fff;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 400;
    transition: all 250ms ease-in;
}

.orderSuccessBtn:hover {
    background-color: #000;
    color: #fff;
}

</style>