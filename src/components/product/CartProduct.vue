<template>
  <div>
    <div class="cartCardContainer border-bottom"  v-for="(product, index) in getCart" :key="product.title" :id="product.id" ref="cartItem">
        <div class="g-0 align-items-center row">
            <div class="col-6">
                <div class="row g-0 align-items-center">
                    <div class="col-auto">
                        <div class="cartThumb">
                            <img :src="product.img" alt="product" />
                        </div>
                    </div>
                    <div class="col-auto productTitle">
                        <span>{{ product.title }}</span>
                    </div>
                </div>
            </div>
            <div class="col price">
                <p>&dollar;{{ product.price }}</p>
            </div>
            <div class="col cartQuantity">
                <input min="1" type="number" name="productQuantity" :value="product.count" disabled/>
            </div>
            <div class="col total">
                <p>
                    &dollar;{{ product.totalPrice }}
                </p>
        </div>
            <div class="col">
                <button class="removeFromCart" @click="handleClick(index)">
                    <Icon icon="ep:close" />
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { mapGetters } from 'vuex';

export default {
    name: "CartProduct-component",
    data() {
        return {
            image: '/assets/images/item-3.jpg',
            inputValue: 1
        }
    },
    components: {
        Icon,
    },

    methods: {
      handleClick(index) {
        this.getCart.splice(index, 1);
        }
    },

    computed: {
        ...mapGetters([
            'getCart'
        ]),

    }
}

</script>

<style scoped>
@import "./cartProduct.css";
</style>