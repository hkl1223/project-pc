<template>
  <div>
    <div class="container">
      <div class="waterfalls-title">电视剧热播排行榜</div>
    </div>
    <div class="itemCt">
      <div v-for="item in dataList.list" :key="item.index">
        <div class="loop">
          <div
            :class="
              item.order == 1 || item.order == 2 || item.order == 3
                ? 'orderIndex'
                : 'order'
            "
          >
            {{ item.order }}
          </div>
          <div class="nameCt">
            <div class="name">{{ item.name }}</div>
            <div class="introduction">{{ item.introduction }}</div>
          </div>
          <div class="series">更新至{{ item.series }}集</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from "vue";

export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const dataList = reactive({
      list: props.list,
    });
    onMounted(() => {
      dataList.list.map((item, index) => {
        return (item.order = index + 1);
      });
    });
    return { dataList };
  },
});
</script>

<style scoped lang="less">
@nowrap: {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
};
.container {
  .waterfalls-title {
    font-size: 30px;
    padding: 15px;
  }
}
.itemCt {
  .loop {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    background: #f8f8f8;
    border-bottom: 1px solid #ccc;
    .orderIndex {
      background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-left: 20px;
      font-size: 30px;
      height: 40px;
      width: 30px;
      text-align: center;
    }
    .order {
      margin-left: 20px;
      color: #686868;
      font-size: 30px;
      height: 30px;
      width: 30px;
      text-align: center;
    }

    .nameCt {
      width: 60%;
      margin-left: 20px;
      .name {
        font-size: 20px;
        font-weight: 700;
        @nowrap();
      }
      .introduction {
        color: #b4b4b4;
        @nowrap();
      }
    }
    .series {
      width: 30%;
      margin-right: 20px;
      text-align: right;
      color: #b4b4b4;
    }
  }
}
</style>