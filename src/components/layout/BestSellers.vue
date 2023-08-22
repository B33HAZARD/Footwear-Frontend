<script>

import Products from '../cards/products/Products.vue';

export default {
    name: "BestSellers-component",
    data() {
        return {
            products: [
                {id: 123, title: "Women's Boots Shoes Maca", img: "/assets/images/item-1.jpg", price: "$129.00"},
                {id: 124, title: "Women's Boots Shoes Maca", img: "/assets/images/item-2.jpg", price: "$139.00"},
                {id: 125, title: "Women's Boots Shoes Maca", img: "/assets/images/item-3.jpg", price: "$149.00"},
                {id: 126, title: "Women's Boots Shoes Maca", img: "/assets/images/item-4.jpg", price: "$119.00"},
                {id: 127, title: "Women's Boots Shoes Maca", img: "/assets/images/item-5.jpg", price: "$179.00"},
                {id: 128, title: "Women's Boots Shoes Maca", img: "/assets/images/item-7.jpg", price: "$139.00"},
                {id: 129, title: "Women's Boots Shoes Maca", img: "/assets/images/item-8.jpg", price: "$189.00"},
                {id: 130, title: "Women's Boots Shoes Maca", img: "/assets/images/item-10.jpg", price: "$169.00"},
                {id: 131, title: "Women's Boots Shoes Maca", img: "/assets/images/item-11.jpg", price: "$129.00"},
                {id: 132, title: "Women's Boots Shoes Maca", img: "/assets/images/item-14.jpg", price: "$109.00"},
            ]
        }
    },
    components: {
        Products,
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
    <div class="row g-3 justify-content-center align-items-center overflow-hidden">
        <div v-for="product in products" :key="product.id" class="col-12 col-sm-6 col-md-3 mb-3 mb-md-4">
            <Products :title="product.title" :img="product.img" :price="product.price" :id="product.id"  />
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