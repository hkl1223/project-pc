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
        <div class="container">
          <div class="typeName">{{ item.typeName }}</div>
          <div class="des">{{ item.des }}</div>
          <div class="desBtn">
            <div class="desBtnText">查看详情</div>
            <div class="heart">
              <i
                @click="collection(item)"
                v-if="!item.collec"
                class="iconfont icon-heart"
              ></i>
              <i
                @click="cancelCollec(item)"
                v-if="item.collec"
                class="iconfont icon-aixin"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="iconBtn" v-if="state.sliders">
        <div @click="change('left')"><i class="iconfont icon-left"></i></div>
        <div @click="change('right')"><i class="iconfont icon-right"></i></div>
      </div>
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
            transform = `translate(-195%, -50%) scale(0.6) rotate(-10deg)`;
            break;
          case temp2:
            zIndex = 2;
            transform = `translate(-130%, -50%) scale(0.8) rotate(-5deg)`;
            break;
          case temp4:
            zIndex = 2;
            transform = `translate(30%, -50%) scale(0.8) rotate(5deg)`;
            break;
          case temp5:
            zIndex = 1;
            transform = `translate(95%, -50%) scale(0.6) rotate(10deg)`;
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
    let change = (direction) => {
      if (direction === "right") {
        state.initial++;
        state.initial >= state.sliders.length ? (state.initial = 0) : null;
        return;
      }
      if (direction == "left") {
        state.initial--;
        state.initial < 0 ? (state.initial = state.sliders.length - 1) : null;
        return;
      }
    };

    const chooseItem = (item) => {
      state.initial = item.index;
    };

    //收藏
    const collection = (item) => {
      item.collec = true;
    };
    //取消收藏
    const cancelCollec = (item) => {
      item.collec = false;
    };

    return {
      state,
      root,
      change,
      chooseItem,
      collection,
      cancelCollec,
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
    width: 100%;
    height: 100%;
    .slide {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 0;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 450px;
      transition: 0.5s;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .mark {
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        transition: 0.3s;
      }
      .container {
        animation: post-list-row 0.3s;
        margin-top: -70px;
        display: none;
        text-align: center;
        .typeName {
          color: #f1c740;
          letter-spacing: 7.5px;
          font-style: oblique;
          font-family: SimHei;
          font-weight: 700;
        }
        .des {
          color: #fff;
          margin-top: 5px;
          font-family: SimHei;
          font-size: 16px;
          font-weight: 700;
        }
        .desBtn {
          cursor: pointer;
          position: absolute;
          left: 23%;
          display: flex;
          margin-top: 15px;
          .desBtnText {
            height: 30px;
            width: 130px;
            color: #000;
            line-height: 30px;
            background: linear-gradient(to right, #d6b058, #fdb852);
            border-radius: 10px 10px 100px 10px;
            z-index: 99;
          }
          .heart {
            height: 30px;
            width: 60px;
            background: #000;
            border-radius: 5px;
            margin-left: -20px;
            .icon-heart {
              margin-left: 10px;
              color: #fff;
              line-height: 30px;
            }
            .icon-aixin {
              margin-left: 10px;
              line-height: 30px;
              color: #d81e06;
            }
          }
        }
      }
      &.active .container {
        display: block;
      }
      &.active .mark,
      &:hover .mark {
        background: rgba(0, 0, 0, 0);
      }
    }
  }
  .iconBtn {
    position: relative;
    top: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

@keyframes post-list-row {
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0) scale(0.9);
  }
}
</style>

