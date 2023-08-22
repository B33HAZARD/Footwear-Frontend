<script>
import {VueperSlide, VueperSlides} from "vueperslides";
import 'vueperslides/dist/vueperslides.css';
export default {
  name: "HomeSlider-component",
  components: {
    VueperSlide,
    VueperSlides
  },
  data: () => ({
    slides: [
      {
        title: '',
        content: '<div class="slideContent">' +
            '<h1 class="slideHeading1">Men\'s</h1>\n' +
            '<h2 class="slideHeading2">Shoes</h2>\n' +
            '<h2 class="slideHeading3">Collection</h2>' +
            '<p class="slideDescription">New trending shoes</p>\n' +
            '<button class="slideBtn">Shop Collection</button>\n' +
            '</div>',
        image: '/assets/images/homeSliderImg-2.jpg'
      },
      {
        title: '',
        content: '<div class="slideContent">' +
            '<h1 class="slideHeading1">huge</h1>\n' +
            '<h2 class="slideHeading2">sale</h2>\n' +
            '<h2 class="slideHeading3"><span class="fw-bold">50% </span>off</h2>' +
            '<p class="slideDescription">Big sale sandals</p>\n' +
            '<button class="slideBtn">Shop Collection</button>\n' +
            '</div>',
        image: '/assets/images/homeSliderImg-1.jpg'
      },
      {
        title: '',
        content: '<div class="slideContent">' +
            '<h1 class="slideHeading1">new</h1>\n' +
            '<h2 class="slideHeading2">arrival</h2>\n' +
            '<h2 class="slideHeading3">up to <span class="fw-bold"> 30% </span> off</h2>' +
            '<p class="slideDescription">New stylish shoes for men</p>\n' +
            '<button class="slideBtn">Shop Collectiondfsf</button>\n' +
            '</div>',
        image: '/assets/images/homeSliderImg-3.jpg'
      }
    ]
  })
}
</script>

<template>
  <div>
    <vueper-slides
        fade
        :arrows="false"
        :bullets="false"
        :autoplay="true"
        :duration="3000"
        class="no-shadow"
    >
      <vueper-slide
          v-for="(slide, i) in slides"
          :key="'rt'+i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
      />
    </vueper-slides>
  </div>
</template>

<style scoped>
@import './homeSlider.css';
</style>