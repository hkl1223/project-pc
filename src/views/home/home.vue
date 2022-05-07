<template>
  <div class="home">
    <router-link to="/carousel"><div>轮播图</div></router-link>
    <router-link to="/waterfalls"><div>瀑布流</div></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {};
  },
  setup() {},
});
</script>

<style lang="less">
.home {
  text-align: center;
}
</style>