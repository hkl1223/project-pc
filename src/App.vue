<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent, watch, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  setup() {},
});
</script>
