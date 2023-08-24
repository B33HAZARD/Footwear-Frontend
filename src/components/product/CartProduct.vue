<template>
    <div class="cartCardContainer border-bottom">
        <div class="g-0 align-items-center row">
            <div class="col-6">
                <div class="row g-0 align-items-center">
                    <div class="col-auto">
                        <div class="cartThumb">
                            <img :src="product.image" />
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
                <input min="1" type="number" name="productQuantity" :value="quantity" />
            </div>
            <div class="col total">
                <p>
                    &dollar;{{ totalPrice }}
                </p>
        </div>
            <div class="col">
                <button class="removeFromCart">
                    <Icon icon="ep:close" />
                </button>
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
            quantity: this.$store.state.quantity,
            image: '/assets/images/item-3.jpg',
            inputValue: 1
        }
    },
    components: {
        Icon,
    },
    computed: {
        ...mapGetters([
            'product',
            'totalPrice',
            'qunatity'
        ]),

    }
}

</script>

<style scoped>
@import "./cartProduct.css";
</style>