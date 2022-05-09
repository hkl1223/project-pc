<template>
  <div>
    <Carousel :sliders="list" :duration="2000" :initial="0" :autoplay="true" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import carousel1 from "../../assets/carouselImg/1.jpg";
import carousel2 from "../../assets/carouselImg/2.jpg";
import carousel3 from "../../assets/carouselImg/3.jpg";
import carousel4 from "../../assets/carouselImg/4.jpg";
import carousel5 from "../../assets/carouselImg/5.jpg";
import Carousel from "../../components/carousel/carousel.vue";

const list = [
  {
    imgUrl: carousel1,
  },
  {
    imgUrl: carousel2,
  },
  {
    imgUrl: carousel3,
  },
  {
    imgUrl: carousel4,
  },
  {
    imgUrl: carousel5,
  },
];
export default defineComponent({
  name: "carousel",
  components: { Carousel },
  setup() {
    return { list };
  },
});
</script>

<style lang="less" scoped>
</style>