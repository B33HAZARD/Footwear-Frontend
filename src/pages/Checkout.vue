<template>
    <div class="customContainer">
    <div class="row g-0 justify-content-center checkoutContainer">
        <div class="d-block text-center align-self-center">
            <h1>Updated Item Count</h1>
        </div>
        <div class="col-12 text-center">
            <p>{{ getQuantity }}</p>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: "Checkout-component",

    computed: {
        ...mapGetters([
            'getQuantity'
        ])
    }
}

</script>

<style scoped>
.checkoutContainer {
    height: 500px;
}
</style>