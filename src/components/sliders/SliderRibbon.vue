<script>
import {VueperSlide, VueperSlides} from "vueperslides";
import 'vueperslides/dist/vueperslides.css';
export default {
  name: "SliderRibbon-component",
  components: {
    VueperSlide,
    VueperSlides
  },
  data: () => ({
    slides: [
      {
        title: '<h3 class="sliderRibbonTitle">Our biggest sale yet 50% off all summer shoes</h3>',
        content: ''
      },
      {
        title: '<h3 class="sliderRibbonTitle">25% off (Almost) Everything! Use Code: Summer Sale</h3>',
        content: ''
      },
      {
        title: '<h3 class="sliderRibbonTitle" >Our biggest sale yet 50% off all summer shoes</h3>',
        content: ''
      }
    ]
  })
}
</script>

<template>
  <div class="homeSliderRibbon">
    <vueper-slides
        fade
        :arrows="false"
        :bullets="false"
        :autoplay="true"
        :duration="3000"
        fixed-height="30px"
        class="no-shadow"
    >
      <vueper-slide
          v-for="(slide, i) in slides"
          :key="'rt'+i"
          :title="slide.title"
          :content="slide.content"
      />
    </vueper-slides>
  </div>
</template>

<style scoped>
@import './sliderRibbon.css';
</style>