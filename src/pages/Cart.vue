<template>
    <div class="customContainer">
        <Breadcrumbs title="shopping cart" />
        <div class="sectionPadding">
            <div class="cartHeader row g-0">
                <div class="col-6 cartHeading">product details</div>
                <div class="col cartHeading">price</div>
                <div class="col cartHeading">quantity</div>
                <div class="col cartHeading">total</div>
                <div class="col cartHeading">remove</div>
            </div>
            <CartProduct />
        </div>
      <div class="row g-0 justify-content-end sectionPaddingBottom">
        <router-link to="/checkout" class="text-end">
            <button class="checkoutBtn">Checkout</button>
        </router-link>
      </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/nav/Breadcrumbs.vue';
import CartProduct from '@/components/product/CartProduct.vue';

export default {
    name: "Cart-page",
    components: {
        Breadcrumbs,
        CartProduct
    },

  methods: {
  },

  computed: {

  },

}

</script>

<style scoped>
@import './cart.css';
</style>