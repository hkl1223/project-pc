<template>
  <div class="banner-box" ref="root">
    <div class="wrapper">
      <div
        v-for="item in state.sliders"
        :key="item.index"
        :class="item.className"
        :style="item.sty"
        @click="chooseItem(item)"
      >
        <img :src="item.imgUrl" alt="" />
        <div class="mark"></div>
      </div>
    </div>
    <div class="iconBtn">
      <div @click="change('left')"><i class="iconfont icon-left"></i></div>
      <div @click="change('right')"><i class="iconfont icon-right"></i></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, watch, ref } from "vue";

export default defineComponent({
  name: "Carousel",
  props: {
    // 轮播图数据
    sliders: {
      required: true,
      type: Array,
      default: () => [],
    },

    // 轮播图之间的过渡时间
    duration: {
      type: Number,
      default: 2000,
    },

    // 初始展示哪一项
    initial: {
      type: Number,
      default: 0,
    },
    //是否开启自动轮播
    autoplay: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    let sliders = props.sliders;
    let diff = sliders.length - 5;
    if (diff < 0) {
      diff = Math.abs(diff);
      sliders.slice(0, diff).forEach((item) => {
        sliders.push({
          ...item,
          id: parseInt(sliders[sliders.length - 1].id) + 1,
        });
      });
    }
    //如果只有一项
    if (diff == -4) {
      //todo
    }
    //处理每一项的样式
    const handleStyle = (initial, sliders) => {
      let len = sliders.length;
      initial = initial < 0 ? 0 : initial >= len ? len - 1 : initial;
      let temp1 = initial - 2;
      let temp2 = initial - 1;
      let temp3 = initial;
      let temp4 = initial + 1;
      let temp5 = initial + 2;
      if (temp1 < 0) {
        temp1 = len + temp1;
      }
      if (temp2 < 0) {
        temp2 = len + temp2;
      }
      if (temp4 >= len) {
        temp4 = temp4 - len;
      }
      if (temp5 >= len) {
        temp5 = temp5 - len;
      }

      return sliders.map((item, index) => {
        let transform = `translate(-50%, -50%) scale(0.55)`;
        let zIndex = 0;
        let className = "slide";
        switch (index) {
          case temp3:
            zIndex = 3;
            className = "slide active";
            transform = `translate(-50%, -50%) scale(1)`;
            break;
          case temp1:
            zIndex = 1;
            transform = `translate(-195%, -50%) scale(0.7)`;
            break;
          case temp2:
            zIndex = 2;
            transform = `translate(-130%, -50%) scale(0.85)`;
            break;
          case temp4:
            zIndex = 2;
            transform = `translate(30%, -50%) scale(0.85)`;
            break;
          case temp5:
            zIndex = 1;
            transform = `translate(95%, -50%) scale(0.7)`;
            break;
        }
        item.sty = {
          transform,
          zIndex,
        };
        item.className = className;
        item.index = index;
        return item;
      });
    };

    let state = reactive({
      initial: props.initial,
      sliders,
    });
    state.sliders = handleStyle(props.initial, sliders);
    //监听initial改变，重新计算每一项的样式
    watch(
      () => state.initial,
      (oldInitial, newInitial) => {
        state.sliders = handleStyle(oldInitial, state.sliders);
      }
    );
    //自动轮播
    let autoTimer = null;
    let autoplay = () => {
      autoTimer = setInterval(() => {
        state.initial++;
        //如果到最后一项返回第一项
        if (state.initial >= state.sliders.length) {
          state.initial = 0;
        }
      }, props.duration);
    };

    let root = ref(null);

    //页面第一次渲染，是否开启自动轮播 鼠标进入离开控制自动轮播
    onMounted(() => {
      if (props.autoplay == true) {
        autoplay();
      }
      let box = root.value;
      box.onmouseleave = () => {
        if (props.autoplay == true) {
          autoplay();
        }
      };
      box.onmouseenter = () => clearInterval(autoTimer);
    });

    //左右切换
    let change = (dir) => {
      if (dir === "right") {
        state.initial++;
        state.initial >= state.sliders.length ? (state.initial = 0) : null;
        return;
      }
      if (dir == "left") {
        state.initial--;
        state.initial < 0 ? (state.initial = state.sliders.length - 1) : null;
        return;
      }
    };

    const chooseItem = (item) => {
      state.initial = item.index;
    };

    return {
      state,
      root,
      change,
      chooseItem,
    };
  },
});
</script>
<style lang="less" scoped>
.banner-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  .wrapper {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    .slide {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 0;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      width: 25%;
      height: 100%;
      border: 3px solid #000;
      overflow: hidden;
      transition: 0.5s;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .mark {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        transition: 0.3s;
      }
      .detail {
        position: absolute;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        padding: 10px;
        widows: 100%;
        height: 40%;
        background: rgba(0, 0, 0, 0.75);
        background: -webkit-gradient(
          top,
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.75)
        );
        transform: translateY(100%);
        transition: 0.3s;
        span {
          display: block;
          line-height: 2;
          font-size: 12px;
          color: #fff;
        }
      }
      &.active .mark,
      &:hover .mark {
        background: rgba(0, 0, 0, 0);
      }
      &.active:hover .detail {
        transform: translateY(0);
      }
    }
  }
  .iconBtn {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -30%;
    > div {
      z-index: 11;
      cursor: pointer;
      height: 30px;
      width: 30px;
      background: rgba(204, 204, 204, 0.5);
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      > i {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>

