<script>
import { Icon } from '@iconify/vue2';
export default {
  name: "CommentCard-section",
  props: {
    thumb: String,
    name: String,
    rating: Number,
    description: String,
    date: String
  },
  components: {
    Icon,
  }
}
</script>

<template>
<div class="commentCardContainer row g-0 justify-content-center overflow-hidden mb-4 py-4">
  <!-- Header -->
  <div class="ccHeader col-auto">
    <div class="thumb">
      <img v-bind:src="thumb" alt="thumbnail" />
    </div>
  </div>
  <!-- Body -->
  <div class="ccBody col">
    <div class="row g-0 align-items-center justify-content-between px-md-3 ps-3">
      <div class="col-12 col-md">
        <p class="commentTitle">{{ name }}</p>
      </div>
      <div class="col-12 col-md-auto">
        <p class="commentDate">{{ date }}</p>
      </div>
      <div class="col col-sm-10 ratings mt-2 mt-md-3">
        <span class="me-1"><Icon icon="bi:star-fill" /></span>
        <span class="me-1"><Icon icon="bi:star-fill" /></span>
        <span class="me-1"><Icon icon="bi:star-fill" /></span>
        <span class="me-1"><Icon icon="bi:star-half" /></span>
        <span class="me-1"><Icon icon="bi:star" /></span>
      </div>
      <div class="col-auto col-sm mt-2 mt-md-3">
        <p class="commentReply">
        <Icon icon="icomoon-free:reply" />
        </p>
    </div>
    </div>
    <div class="row g-0 justify-content-center align-items-center mt-3 mt-md-4">
      <div class="col-12">
        <p class="comment">{{ description }}</p>
</div>
    </div>
  </div>
</div>
</template>

<style scoped>
@import './commentCard.css';
</style>