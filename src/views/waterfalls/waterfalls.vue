<template>
  <div class="">
    <div class="waterfallsCt">
      <Waterfalls :list="list" class="Waterfalls" />
      <Rank :list="list" class="rank" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import carousel1 from "../../assets/carouselImg/1.jpg";
import carousel2 from "../../assets/carouselImg/2.jpg";
import carousel3 from "../../assets/carouselImg/3.jpg";
import carousel4 from "../../assets/carouselImg/4.jpg";
import carousel5 from "../../assets/carouselImg/5.jpg";
import suolong from "../../assets/waterfallsImg/sulong.jpg";
import img from "../../assets/waterfallsImg/img.jpg";
import green from "../../assets/waterfallsImg/green.jpg";
import Waterfalls from "../../components/waterfalls/waterfalls.vue";
import Rank from "../../components/rank/rank.vue";

const list = [
  {
    name: "且试天下",
    series: "14",
    introduction: "杨洋赵露思并肩共赴天下",
    bigPic: carousel1,
    smallPic: suolong,
    vip: true,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "杨洋",
      },
    ],
  },
  {
    name: "异物志",
    series: "12",
    introduction: " 诡异凶案牵出神秘阴谋",
    bigPic: carousel2,
    smallPic: img,
    vip: true,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "悬疑",
      },
      {
        name: "奇幻",
      },
      {
        name: "邵庄",
      },
    ],
  },
  {
    name: "瓦舍之素舞遥",
    series: "16",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel3,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
  {
    name: "瓦舍之素舞遥",
    series: "16",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel4,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
  {
    name: "瓦舍之素舞遥",
    series: "16",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel5,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
  {
    name: "瓦舍之素舞遥",
    series: "16",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel5,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
  {
    name: "测试xxx",
    series: "18",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel5,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
  {
    name: "测试123",
    series: "18",
    introduction: "相扑美少女开启逆袭剧本",
    bigPic: carousel5,
    smallPic: green,
    vip: false,
    description:
      "剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介剧情简介",
    label: [
      {
        name: "2022",
      },
      {
        name: "古装",
      },
      {
        name: "爱情",
      },
      {
        name: "剧情",
      },
    ],
  },
];
export default defineComponent({
  name: "waterfalls",
  components: { Waterfalls, Rank },

  setup() {
    return { list };
  },
});
</script>

<style lang="less">
.waterfallsCt {
  display: flex;
  .waterfalls {
    width: 70%;
  }
  .rank {
    width: 30%;
    margin-right: 50px;
  }
}
</style>



