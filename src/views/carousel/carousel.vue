<template>
  <div>
    <Carousel :sliders="list" :duration="2000" :initial="0" :autoplay="false" />
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
    des: "江湖事，江湖了",
    typeName: "游戏推荐",
    collec: false,
  },
  {
    imgUrl: carousel2,
    des: "有志者,事竟成",
    typeName: "励志文学",
    collec: false,
  },
  {
    imgUrl: carousel3,
    des: "星河滚烫，理想皆与你有关",
    typeName: "星河滚烫",
    collec: false,
  },
  {
    imgUrl: carousel4,
    des: "春风十里，原来是你",
    typeName: "春风十里",
    collec: false,
  },
  {
    imgUrl: carousel5,
    des: "踏雪而来,乘兴而归",
    typeName: "踏雪而来",
    collec: false,
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