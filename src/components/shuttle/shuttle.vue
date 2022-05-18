<template>
  <div>
    <div class="shuttle">
      <div class="frame">
        <div class="title">Source</div>
        <div class="shuttleItemCt">
          <div
            class="shuttleItem"
            v-for="item in data.leftItem"
            :key="item.index"
          >
            <label :for="item.index">
              <input
                type="checkbox"
                :value="item.index"
                :disabled="item.disable"
                :id="item.index"
                v-model="checkLeft"
              />
              <span :class="item.disable ? 'labelDisable' : 'label'">
                {{ item.label }}</span
              >
            </label>
          </div>
        </div>
      </div>

      <div class="twoBtn">
        <div @click="toLeft"><i class="iconfont icon-left1"></i> To left</div>
        <div @click="toRight">
          To right
          <i class="iconfont icon-right1"></i>
        </div>
      </div>
      <div class="frame">
        <div class="title">Target</div>
        <div class="shuttleItemCt">
          <div
            class="shuttleItem"
            v-for="item in data.rightItem"
            :key="item.index"
          >
            <label :for="item.index">
              <input
                type="checkbox"
                :value="item.label"
                :disabled="item.disable"
                :id="item.index"
                v-model="checkRight"
              />
              <span :class="item.disable ? 'labelDisable' : 'label'">
                {{ item.label }}</span
              >
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  props: {
    leftItem: {
      type: Array,
      default: () => [],
    },
    rightItem: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const checkLeft = ref([]);
    const checkRight = ref([]);

    const data = reactive({
      leftItem: props.leftItem,
      rightItem: props.rightItem,
    });

    const toLeft = () => {
      console.log(checkRight.value);
      if (checkRight.value.length >= 1) {
        checkRight.value.sort(sortIndex);
        data.leftItem.push(checkRight.value);
        //todo
        // https://github.com/cxz520299/vue3-typescript/blob/main/src/views/shuttle/shuttle.vue
        console.log(data.leftItem);
      }
      checkLeft.value = [];
      checkRight.value = [];
    };

    const toRight = () => {
      console.log(checkLeft.value);
    };

    const sortIndex = (a, b) => {
      return b - a;
    };

    return {
      checkLeft,
      checkRight,
      data,
      toLeft,
      toRight,
      sortIndex,
    };
  },
});
</script>


<style lang="less" scoped>
.shuttle {
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  .frame {
    height: 400px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 3px;
    .title {
      height: 50px;
      line-height: 50px;
      background: #f5f7fa;
      padding-left: 20px;
      margin-bottom: 5px;
    }
    .shuttleItemCt {
      height: 340px;
      overflow: auto;
      .shuttleItem {
        padding: 5px 10px;
        .label {
          color: #606266;
          font-size: 14px;

          &:hover {
            color: #409eff;
            cursor: pointer;
          }
        }
        .labelDisable {
          color: #a8abb2;
          font-size: 14px;
          cursor: not-allowed;
        }
      }
    }
  }
  .twoBtn {
    display: flex;
    text-align: center;
    > div {
      height: 30px;
      width: 100px;
      line-height: 30px;
      //   cursor: not-allowed;
      //   background: #a0cfff;
      background: #409eff;
      margin: 10px;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>