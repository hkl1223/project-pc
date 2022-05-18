<template>
  <div class="home">
    <el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="轮播图" name="carousel">
        <carousel ref="carouselRef"></carousel>
      </el-tab-pane>
      <el-tab-pane label="瀑布流" name="waterfalls">
        <waterfalls ref="waterfallsRef"></waterfalls>
      </el-tab-pane>
      <!-- <el-tab-pane label="穿梭框" name="shuttle">
        <shuttle ref="shuttleRef"></shuttle>
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Carousel from "../carousel/carousel.vue";
import Waterfalls from "../waterfalls/waterfalls.vue";
import Shuttle from "../shuttle/shuttle.vue";

export default defineComponent({
  name: "Home",
  components: { Carousel, Waterfalls, Shuttle },
  setup() {
    const carouselRef = ref();
    const waterfallsRef = ref();
    const shuttleRef = ref();
    const activeName = ref("carousel");

    const handleClick = (tab, event) => {
      if (tab.paneName == "carousel") {
        carouselRef.value.show();
      } else if (tab.paneName == "waterfalls") {
        waterfallsRef.value.show();
      } else if (tab.paneName == "shuttle") {
        shuttleRef.value.show();
      }
    };
    return {
      handleClick,
      activeName,
      carouselRef,
      waterfallsRef,
      shuttleRef,
    };
  },
});
</script>

<style lang="less">
</style>