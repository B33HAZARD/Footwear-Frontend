<script>

import Product from '../cards/products/Product.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "BestSellers-component",
  data() {
    return {
    }
  },
  methods: {

    ...mapActions([
      'getProducts'
    ]),

  },

  created() {
    this.getProducts();
  },

  computed: {
    ...mapGetters([
      'products'
    ])
  },

    components: {
        Product,
    },
}

</script>


<template>
<div class="customContainer sectionPadding">
    <div class="row g-0 justify-content-center align-items-center mb-3 mb-md-4">
        <div class="col-12 text-center">
            <h2 class="h2Heading rokit fw-bold">BEST SELLERS</h2>
        </div>
    </div>
    <div class="row g-3 justify-content-center overflow-hidden">
        <div v-for="product in products" :key="product.id" class="col-12 col-sm-6 col-md-3 mb-3 mb-md-4">
            <Product :title="product.title" :img="product.image" :price="product.price" :id="product.id"  />
        </div>
    </div>
    <button></button>
</div>
</template>


<style scoped>

img {
    width: 250px;
}

</style>