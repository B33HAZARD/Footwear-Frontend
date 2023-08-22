<script>
import ProductDescription from "@/components/product/ProductDescription.vue";
import Manufacturer from "@/components/product/Manufacturer.vue";
import ProductReviews from "@/components/product/ProductReviews.vue";
import Breadcrumbs from "@/components/nav/Breadcrumbs.vue";
import { Icon } from '@iconify/vue2';
import ProdductSize from "../components/size/ProductSize.vue";


export default {
  name: "ProductDetails-page",
  components: {
    ProductDescription,
    Manufacturer,
    ProductReviews,
    Breadcrumbs,
    Icon,
    ProdductSize,
  },
  data() {
    return {
      id: this.$route.params.id,
      productImg: "/assets/images/item-1.jpg",
      tabIndex:0,
    }
},
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['tabSelected', 'text-light']
      } else {
        return ['bg-secondary', 'text-dark']
      }
    }
  }
}
</script>

<template>
<div class="customContainer">
  <Breadcrumbs />
  <div class="sectionPadding">
    <!-- Product View -->
  <div class="sectionPaddingBottom">
  <div class="row g-0 justify-content-center">
<div class="col-12 col-md-8 col-lg-7 col-xl-8 pe-md-3 pe-xl-5">
  <div class="productImage border">
    <img :src="productImg" alt="product" />
  </div>
</div>
<!-- Product Details -->
<div class="col-12 col-md-4 col-lg-5 col-xl-4 mt-4 mt-md-0">
  <section class="productDetails">
    <h3>women&apos;s boots shoes maca</h3>
    <div class="detailPrice">
      <p>&dollar;68.00</p>
      <span class="me-1"><Icon icon="bi:star-fill" /></span>
      <span class="me-1"><Icon icon="bi:star-fill" /></span>
      <span class="me-1"><Icon icon="bi:star-fill" /></span>
      <span class="me-1"><Icon icon="bi:star-fill" /></span>
      <span class="me-1"><Icon icon="bi:star" /></span>
      <span class="me-1 reviewText">&#40;74 Rating&#41;</span>
  </div>
  <p class="detailDescription">
    Even the all-powerful Pointing has no control about the blind 
    texts it is an almost unorthographic life One day however a small line of 
    blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  </p>
  </section>
  <h4 class="detailsSmallHeadings">Size</h4>
  <ProdductSize />
  <h4 class="detailsSmallHeadings">Width</h4>
  <div class="widthContainer row g-0 mb-4">
    <div class="col-auto">M</div>
    <div class="col-auto">W</div>
  </div>
  <button class="detailsBtn"><span><Icon icon="ion:cart-outline" /></span> Add to Cart</button>
</div>
    </div>
  </div>
  <!-- Reviews and Description -->
  <div class="productDetailsContainer">
    <b-card no-body>
      <b-tabs v-model="tabIndex" card align="left">
        <b-tab title="description" :title-link-class="linkClass(0)"><ProductDescription /></b-tab>
        <b-tab title="manufacturer" :title-link-class="linkClass(1)"><Manufacturer /></b-tab>
        <b-tab title="review" :title-link-class="linkClass(2)"><ProductReviews /></b-tab>
      </b-tabs>
    </b-card>
  </div>
  </div>
</div>
</template>

<style scoped>
@import "./productDetails.css";
</style>