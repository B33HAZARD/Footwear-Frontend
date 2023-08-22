<script>
// import { Icon } from '@iconify/vue2';
import CommentCard from "@/components/comments/CommentCard.vue";
export default {
  name: "Reviews-section",
  components: {
    CommentCard,
    // Icon,
  },
  data: () => ({
    persons: [
      {
      id: 1029,
      cardImage: "/assets/images/person1.jpg",
      title: "jacob webb",
      rating: 4,
      description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
      date: "14 march 2018"
      },
      {
        id: 2938,
        cardImage: "/assets/images/person2.jpg",
        title: "jacob webb",
        rating: 4,
        description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
        date: "14 march 2018"
      },
      {
        id: 3847,
        cardImage: "/assets/images/person3.jpg",
        title: "jacob webb",
        rating: 4,
        description: "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov",
        date: "14 march 2018"
      },
    ]
  }),
}
</script>

<template>
<div>
  <h3 class="prdReviewHeading mb-3 mb-md-4">23 reviews</h3>
  <div v-for="person in persons" :key="'pr' + person.id" :id="person.id">
  <CommentCard :thumb="person.cardImage" :name="person.title" :rating="person.rating" :description="person.description" :date="person.date"/>
    </div>
</div>
</template>

<style scoped>
@import './reviews.css';
</style>