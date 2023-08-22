<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "WriteReviews-section",
  components: {
    Icon,
  }
}
</script>

<template>
<div>
  <h3 class="prdReviewHeading mb-2 mb-sm-3 mb-md-4">give review</h3>
  <div class="py-4 mb-4">
<div class="row justify-content-between giveReviewContainer">
  <!-- 5 -->
  <div class="col-12 col-sm-7 col-md-12 col-xxl-7 mb-sm-4 mb-md-0 mb-xxl-4">
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1 reviewText">&#40;98&#37;&#41;</span>
  </div>
  <div class="col-12 col-sm-5 col-md-12 col-xxl-5 mb-4 ps-3 reviewText">
    <p>20 Reviews</p>
  </div>
<!-- 4 -->
<div class="col-12 col-sm-7 col-md-12 col-xxl-7 mb-sm-4 mb-md-0 mb-xxl-4">
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1 reviewText">&#40;85&#37;&#41;</span>
  </div>
  <div class="col-12 col-sm-5 col-xl-12 col-xxl-5 mb-4 ps-3 reviewText">
    <p>10 Reviews</p>
  </div>
  <!-- 3 -->
  <div class="col-12 col-sm-7 col-md-12 col-xxl-7 mb-sm-4 mb-md-0 mb-xxl-4">
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1 reviewText">&#40;70&#37;&#41;</span>
  </div>
  <div class="col-12 col-sm-5 col-md-12 col-xxl-5 mb-4 ps-3 reviewText">
    <p>5 Reviews</p>
  </div>
  <!-- 2 -->
  <div class="col-12 col-sm-7 col-md-12 col-xxl-7 mb-sm-4 mb-md-0 mb-xxl-4">
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1 reviewText">&#40;10&#37;&#41;</span>
  </div>
  <div class="col-12 col-sm-5 col-md-12 col-xxl-5 mb-4 ps-3 reviewText">
    <p>0 Reviews</p>
  </div>
  <!-- 1 -->
  <div class="col-12 col-sm-7 col-md-12 col-xxl-7 mb-sm-4 mb-md-0 mb-xxl-4">
    <span class="me-1"><Icon icon="bi:star-fill" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1"><Icon icon="bi:star" /></span>
    <span class="me-1 reviewText">&#40;0&#37;&#41;</span>
  </div>
  <div class="col-12 col-sm-5 col-md-12 col-xxl-5 mb-4 ps-3 reviewText">
    <p>0 Reviews</p>
  </div>
</div>
  </div>
</div>
</template>

<style scoped>
@import './reviews.css';
</style>