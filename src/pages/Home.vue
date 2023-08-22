<script>
import BestSellers from "@/components/layout/BestSellers.vue";
import HomeSlider from "@/components/sliders/HomeSlider.vue";
export default {
  name: "Home-page",
  components: {
    BestSellers,
    HomeSlider,
  }
}
</script>

<template>
<div>
  <HomeSlider />
  <BestSellers />
</div>
</template>

<style scoped>

</style>