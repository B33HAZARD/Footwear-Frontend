<script>
import Reviews from "@/components/product/reviews/Reviews.vue";
import WriteReviews from "@/components/product/reviews/WriteReviews.vue";
export default {
  name: "ProductReviews-component",
  components: {
Reviews,
    WriteReviews
  },
}
</script>

<template>
  <div class="row g-0 justify-content-center">
  <div class="col-12 col-md-8 col-lg-7 col-xl-8 pe-md-4">
    <Reviews />
  </div>
    <div class="col-12 col-md-4 col-lg-5 col-xl-4">
<WriteReviews />
    </div>
  </div>
</template>

<style scoped>
@import './productDescription.css';
</style>