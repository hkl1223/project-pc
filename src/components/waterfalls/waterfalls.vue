<template>
  <div class="waterfalls">
    <div class="container">
      <div class="waterfalls-title">同步剧场</div>
      <div class="pagination">
        <el-pagination
          @current-change="currentChange"
          :current-page="page"
          :page-size="size"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <div class="WaterfallsList">
      <div
        v-for="item in dataList.list"
        :key="item.index"
        class="item"
        @mouseenter="onMouseOver(item)"
        @mouseleave="onMouseout(item)"
      >
        <div class="listCt" v-show="!item.visible">
          <div v-if="item.vip" class="vip">VIP</div>
          <img :src="item.bigPic" alt="" />
          <div class="series">更新至{{ item.series }}集</div>
          <div class="name">{{ item.name }}</div>
          <div class="introduction">{{ item.introduction }}</div>
        </div>
        <div v-show="item.visible" class="visibleShow">
          <div class="smallPic">
            <img :src="item.smallPic" alt="" />
          </div>
          <div class="name">{{ item.name }}</div>
          <div class="labelCt">
            <div v-for="label in item.label" :key="label.index">
              <div class="label">{{ label.name }}</div>
            </div>
          </div>
          <div class="description">简介:{{ item.description }}</div>
          <div class="btnCt">
            <div class="watch">立即观看</div>
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
            <div class="down"><i class="iconfont icon-down2"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, defineComponent } from "vue";
export default defineComponent({
  name: "waterfalls",
  components: {},
  props: {
    //数据
    list: {
      required: true,
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const page = ref(1); //第几页
    const size = ref(8); //一页多少条
    const total = ref(0); //总数
    const waterfallsData = ref([]); //数据
    const dataList = reactive({
      list: waterfallsData,
    });

    //鼠标移入
    const onMouseOver = (item) => {
      item.visible = true;
    };
    //鼠标移出
    const onMouseout = (item) => {
      item.visible = false;
    };
    //收藏
    const collection = (item) => {
      item.collec = true;
    };
    //取消收藏
    const cancelCollec = (item) => {
      item.collec = false;
    };
    //处理数据
    const getData = () => {
      waterfallsData.value = props.list.slice(
        (page.value - 1) * size.value,
        page.value * size.value
      );
      total.value = props.list.length;
    };
    //翻页
    const currentChange = (val) => {
      console.log("翻页，当前为第几页", val);
      page.value = val;
      getData();
    };

    const handleData = () => {
      props.list.map((item, index) => {
        return (item.visible = false), (item.collec = false);
      });
    };

    onMounted(() => {
      getData();
      handleData();
    });
    return {
      dataList,
      page,
      size,
      total,
      collection,
      cancelCollec,
      onMouseOver,
      onMouseout,
      currentChange,
    };
  },
});
</script>

<style lang="less" scoped>
@white: #fff;
@red: #d81e06;
@nowrap: {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
};
@name: {
  color: #111;
  margin-top: 10px;
  font-size: 14px;
  @nowrap();
  cursor: pointer;
  &:hover {
    color: @red;
  }
};
.waterfalls {
  .container {
    display: block;
    .waterfalls-title {
      font-size: 30px;
      margin-left: 50px;
    }
    .pagination {
      display: flex;
      justify-content: flex-end;
      width: 80%;
    }
  }
  .WaterfallsList {
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    .item {
      margin: 20px;
      height: 320px;
      width: 200px;
    }
    .listCt {
      position: relative;
      > img {
        border-radius: 3px;
        height: 250px;
        width: 200px;
      }
      .vip {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        margin: 10px;
        font-size: 12px;
        width: 30px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        border-radius: 4px;
        color: #663a00;
        background: #fdd881;
      }
      .series {
        font-size: 13px;
        @nowrap();
        padding: 0 10px;
        color: @white;
        margin-top: -25px;
      }
      .name {
        @name();
      }
      .introduction {
        margin-top: 5px;
        font-size: 13px;
        color: #999;
        @nowrap();
      }
    }

    .visibleShow {
      height: 320px;
      width: 200px;
      background: @white;
      border-radius: 3px;
      box-shadow: 0 4px 8px rgb(40 40 40 / 20%);
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
      }
      .smallPic {
        > img {
          border-radius: 3px 3px 0px 0px;
          width: 200px;
          height: 150px;
        }
      }
      .name {
        @name();
        margin-top: 5px;
        padding: 0 10px;
      }
      .labelCt {
        cursor: pointer;
        margin: 10px 7px;
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: space-between;

        > div {
          background: #eee;
          border-radius: 10px;
          text-align: center;
          width: 40px;
          padding: 0 2px;
          > .label {
            color: #333;
            font-size: 12px;
          }
        }
      }
      .description {
        margin-top: 12px;
        padding: 0 5px;
        font-size: 13px;
        color: #999;
        //2行文字溢出
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .btnCt {
        margin: 12px;
        display: flex;
        align-items: center;
        .watch {
          height: 30px;
          width: 70px;
          cursor: pointer;
          border-radius: 20px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
          background: linear-gradient(to right, #ffb53f, #ff2153);
        }
        .heart {
          margin-left: 20px;
          cursor: pointer;
          :hover {
            color: @red;
          }
        }
        .icon-aixin {
          color: @red;
        }
        .down {
          margin-left: 20px;
          cursor: pointer;
          :hover {
            color: @red;
          }
        }
      }
    }
  }
}
</style>