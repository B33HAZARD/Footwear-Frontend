<template>
  <div id="app">
    <Header/>
    <SliderRibbon />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import SliderRibbon from "@/components/sliders/SliderRibbon.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SliderRibbon,
  }
}
</script>

<style>
@import './assets/stylesheets/main.css';
</style>
