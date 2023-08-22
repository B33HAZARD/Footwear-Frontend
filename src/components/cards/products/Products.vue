<script>


export default {
    name: "Products-component",
    props: {
        title: String,
        price: String,
        img: String,
        id: Number
    },
    data() {
        return {
            
        }
    },
    components: {

    },
}

</script>


<template>

<div class="productWrapper">
    <div class="productHeader">
        <router-link :to="'/product/' + id">
        <img v-bind:src="img" class="productThumbnail" alt="footwear"/>
    </router-link>
    </div>
    <div class="ProductBody">
        <router-link :to="'/product/' + id">
        <h4 class="fs18 rokit text-uppercase text-center">{{ title }}</h4>
    </router-link>
    <p class="rokit fs18 text-center">{{ price }}</p>
    </div>
    <div class="ProductFooter"></div>
</div>


</template>


<style scoped>
@import './products.css'
</style>