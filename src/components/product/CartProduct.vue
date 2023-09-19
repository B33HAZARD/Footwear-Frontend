<template>
  <div>
    <div v-if="isEmpty">
        <div class="cartCardContainer border-bottom">
            <div class="row g-0 justify-content-center align-items-center">
                <div class="col-auto cartIsEmpty text-danger">
                    <h2><span><Icon icon="fluent:warning-24-filled" /> </span>Cart is Empty</h2>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
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
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "CartProduct-component",
    data() {
        return {
            isEmpty: true,
        }
    },
    components: {
        Icon,
    },

    methods: {

        ...mapMutations([
            'removeSingleProduct',
            'setCart'
        ]),

      handleClick(index) {
        this.removeSingleProduct(index);
        this.isEmpty = true;
        this.getCart.length == 0 && this.$router.push({name: 'Home'});
        },
    },

    created(){
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if(cartData.length) {
            this.setCart(cartData);
            this.isEmpty = false;
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