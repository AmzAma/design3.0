<template>
  <div class="msg">
    <!-- 顶部 -->
    <van-nav-bar title="消息中心" :placeholder ="true" :fixed="true" :border="true">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 头部点赞 -->
    <van-grid :column-num="3" :border="false" >
      <van-grid-item icon="photo-o" text="评论和@" @click="goToComment" />
      <van-grid-item icon="photo-o" text="赞和收藏" @click="goToFabulous" />
      <van-grid-item icon="photo-o" text="系统通知" />
    </van-grid>
    <!-- 消息列表 -->
    <van-swipe-cell :before-close="beforeClose" v-for="(item,index) in cardList" :key="index">
      <div class="cell-left">
        <van-image
          round
          width="35px"
          height="35px"
          :src="item.portrait"
        />
      </div>
      <div class="cell-right">
        <div class="cell-title">
          {{item.name}}
          <span>{{item.create_time}}</span>
        </div>
        <span>{{item.msgTitle}}</span> 
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dialog } from 'vant';
import { getMessageListApi} from "../utils/api";

export default defineComponent({
  data(){
    return{
      cardList: []
    }
  },
  setup() {
    // position 为关闭时点击的位置
    const beforeClose = ({ position }) => {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          return true;
        case 'right':
          return new Promise((resolve) => {
            Dialog.confirm({
              title: '确定删除吗？',
            }).then(resolve);
          });
      }
    };

    return { beforeClose };
  },
  mounted(){
    this.getMessageList();
  },
  methods: {
    goToComment(){
      this.$router.push("/comment");
    },
    goToFabulous(){
      this.$router.push("/fabulous");
    },
    async getMessageList() {
      const res= await getMessageListApi();
      this.cardList = res.results[0].cardList;  
      console.log(res);
    },
  }
});
</script>

<style lang="scss" scoped>
  .msg {
    width: 100%;
    max-height: 812px;
    background-color: rgb(248,248,248);
  
    .van-nav-bar{
      .van-icon {
        color: black
      }
    }
    
    .van-grid {
      padding-bottom: 10px;
      height: 85px;
    }

    .van-swipe-cell {
      height: 70px;
      background-color: #fff;

      .cell-left{
        float: left;
        height: 70px;
        line-height: 70px;
        width: 80px;
        text-align: center;

        .van-image{
          margin-top: 15px;
        }
      }
      .cell-right{
        float: left;
        height: 70px;
        width: 290px;
        text-align: left;
        border-bottom: 5px solid #ccc;

        .cell-title{
          margin-top: 15px;
          margin-bottom: 7px;      
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #000;

          span{
            display: block;
            float: right;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #666666;
            margin-right: 15px;
          }
        }
        span{
          display: block;
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #666666;
        }
      }
      .delete-button {
        height: 70px;
      }
    }
  }
   
  
</style>