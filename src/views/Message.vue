<template>
  <div class="msg">
    <!-- 顶部 -->
    <van-nav-bar title="消息中心" :placeholder ="true" :fixed="true" :border="true">
      <template #right>
        <van-icon name="http://42.192.149.116:3001/images/msgNavbar.png" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="state.loading" style="min-height: 100vh;" :head-height="130" @refresh="onRefresh">
    
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="http://42.192.149.116:3001/images/freshImg.png"
          :style="{ transform: `scale(${props.distance / 130})` }"
        />
        <p class="freshtitle">嗨，热爱生活的梦想家</p>
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
        <p class="freshtitle">嗨，热爱生活的梦想家</p>
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
        <p class="freshtitle">嗨，热爱生活的梦想家</p>
      </template>

      <!-- 头部点赞 -->
      <van-grid :column-num="3" :border="false" >
        <van-grid-item icon="http://42.192.149.116:3001/images/msgIcon1.png" text="评论和@" @click="goToComment" />
        <van-grid-item icon="http://42.192.149.116:3001/images/msgIcon2.png" text="赞和收藏" @click="goToFabulous" />
        <van-grid-item icon="http://42.192.149.116:3001/images/msgIcon3.png" text="系统通知" />
      </van-grid>
      <!-- 消息列表 -->
      <van-swipe-cell :before-close="beforeClose" v-for="(item,index) in cardList" :key="index">
        <div class="cell-left">
          <van-image
            width="33px"
            height="32px"
            :src="item.msgPortait"
          />
        </div>
        <div class="cell-right">
          <div class="cell-title">
            {{item.msgName}}
            <span>{{item.create_time}}</span>
          </div>
          <span>{{item.msgTitle}}</span> 
        </div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>

    </van-pull-refresh>  
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Dialog, Toast } from 'vant';
import { getMessageListApi} from "../utils/api";

export default defineComponent({
  data(){
    return{
      cardList: [],
      iconList:[]
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

    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return { beforeClose,state,onRefresh };
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
      this.iconList = res.results[1].iconList;  
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
      .van-icon__image{
        border-radius: 0;
      }
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
          text-indent: 2px;
        }
      }
      .delete-button {
        height: 70px;
      }
    }
    .doge {
      width: 100px;
      height: 70px;
      margin-top: 8px;
      border-radius: 4px;
    }
    .freshtitle{
      position: relative;
      top: -30px;
    }
  }
   
  
</style>