<template>
  <Shuttle :leftItem="leftItem" :rightItem="rightItem"></Shuttle>
</template>

<script>
import { defineComponent } from "vue";
import Shuttle from "../../components/shuttle/shuttle.vue";

export default defineComponent({
  components: { Shuttle },
  setup() {
    const leftItem = [
      {
        label: "第一列表的数据1",
        disable: false,
      },
      {
        label: "第一列表的数据2",
        disable: false,
      },
      {
        label: "第一列表的数据3",
        disable: true,
      },
      {
        label: "第一列表的数据4",
        disable: false,
      },
    ];
    const rightItem = [
      {
        label: "第二列表的数据1",
        disable: false,
      },
      {
        label: "第二列表的数据2",
        disable: true,
      },
      {
        label: "第二列表的数据3",
        disable: true,
      },
      {
        label: "第二列表的数据4",
        disable: false,
      },
    ];
    const show = () => {};
    return {
      show,
      leftItem,
      rightItem,
    };
  },
});
</script>
